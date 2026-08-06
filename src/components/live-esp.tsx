"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CloudSun,
  Droplets,
  ExternalLink,
  MessageSquarePlus,
  Plane,
  Thermometer,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ESP_DOMAIN = "https://esp.ecobbina.work";
const POLL_MS = 30_000;

interface EspStats {
  temperature?: { celsius: number; fahrenheit: number };
  humidity_percent?: number;
  co2_ppm?: number;
  voc_ppb?: number;
  daily_visitors?: number;
  visitors?: number;
  uptime?: string;
  outdoor?: {
    temp_c?: number;
    humidity?: number;
    location?: string;
  };
}

interface EspAdsb {
  aircraft?: unknown[];
}

export function LiveFromESP() {
  const [stats, setStats] = useState<EspStats | null>(null);
  const [aircraft, setAircraft] = useState<number | null>(null);
  const [online, setOnline] = useState<boolean | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [sRes, aRes] = await Promise.allSettled([
        fetch(`${ESP_DOMAIN}/stats`, { cache: "no-store" }),
        fetch(`${ESP_DOMAIN}/adsb.json`, { cache: "no-store" }),
      ]);

      let nextStats: EspStats | null = null;
      let nextAircraft: number | null = null;
      let anyOk = false;

      if (sRes.status === "fulfilled" && sRes.value.ok) {
        nextStats = await sRes.value.json();
        anyOk = true;
      }
      if (aRes.status === "fulfilled" && aRes.value.ok) {
        const data = (await aRes.value.json()) as EspAdsb;
        if (Array.isArray(data.aircraft)) {
          nextAircraft = data.aircraft.length;
          anyOk = true;
        }
      }

      if (cancelled) return;
      setStats(nextStats);
      setAircraft(nextAircraft);
      setOnline(anyOk);
      if (anyOk) setUpdatedAt(new Date());
    }

    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const tempC = stats?.temperature?.celsius;
  const tempF = stats?.temperature?.fahrenheit;
  const outdoorTemp = stats?.outdoor?.temp_c;
  const location = stats?.outdoor?.location;

  return (
    <Card className="mx-auto w-full max-w-[800px]">
      <CardHeader className="px-4 pt-4">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">
            Live from my ESP32 home server
          </CardTitle>
          <Badge
            variant={online ? "default" : "outline"}
            className="gap-1.5"
            aria-live="polite"
          >
            <WifiOrOff online={online} />
            {online ? "Online" : online === null ? "Connecting" : "Offline"}
          </Badge>
        </div>
        <p className="font-sans text-xs text-muted-foreground">
          {stats
            ? `Uptime ${stats.uptime}${location ? ` · ${location}` : ""}`
            : "Readings refresh every 30 seconds."}
          {updatedAt && (
            <span className="tabular-nums">
              {" "}
              · updated {updatedAt.toLocaleTimeString()}
            </span>
          )}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-4 pb-0">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Tile
            icon={<Thermometer className="h-3.5 w-3.5" />}
            label="Inside temp"
            value={tempC != null ? `${tempC.toFixed(1)}°C` : null}
            sub={tempF != null ? `${tempF.toFixed(1)}°F` : undefined}
          />
          <Tile
            icon={<Droplets className="h-3.5 w-3.5" />}
            label="Inside humidity"
            value={
              stats?.humidity_percent != null
                ? `${stats.humidity_percent.toFixed(0)}%`
                : null
            }
          />
          <Tile
            icon={<CloudSun className="h-3.5 w-3.5" />}
            label="Outside temp"
            value={outdoorTemp != null ? `${outdoorTemp.toFixed(1)}°C` : null}
            sub={location ?? undefined}
          />
          <Tile
            icon={<Users className="h-3.5 w-3.5" />}
            label="Visitors today"
            value={stats?.daily_visitors?.toString() ?? null}
            sub={
              stats?.visitors != null
                ? `${stats.visitors} all-time`
                : undefined
            }
          />
          <Tile
            icon={<Plane className="h-3.5 w-3.5" />}
            label="Aircraft overhead"
            value={aircraft != null ? aircraft.toString() : null}
            sub={aircraft != null ? "in range" : undefined}
          />
          <Tile
            icon={<span className="font-mono text-xs">CO₂</span>}
            label="Indoor CO₂"
            value={
              stats?.co2_ppm != null ? `${stats.co2_ppm} ppm` : null
            }
            sub={
              stats?.voc_ppb != null
                ? `VOC ${stats.voc_ppb} ppb`
                : undefined
            }
          />
        </div>
        {online === false && (
          <p className="rounded-md border border-dashed px-3 py-2 font-sans text-xs text-muted-foreground">
            The ESP32 isn&apos;t reachable right now — these cards will fill in
            when it reconnects.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 px-4 pb-4 pt-3">
        <Button asChild size="sm">
          <Link
            href={`${ESP_DOMAIN}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View live site
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link
            href={`${ESP_DOMAIN}/guestbook`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a comment
            <MessageSquarePlus className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function Tile({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-md border bg-muted/40 p-3">
      <div className="flex items-center gap-1.5 font-sans text-[11px] text-muted-foreground">
        <span className="shrink-0">{icon}</span>
        <span className="truncate">{label}</span>
      </div>
      <div
        className={cn(
          "font-mono text-lg font-semibold tabular-nums",
          value === null && "text-muted-foreground"
        )}
      >
        {value ?? "—"}
      </div>
      {sub && (
        <div className="truncate font-sans text-[10px] text-muted-foreground">
          {sub}
        </div>
      )}
    </div>
  );
}

function WifiOrOff({ online }: { online: boolean | null }) {
  if (online) return <Wifi className="h-3 w-3" />;
  return <WifiOff className="h-3 w-3" />;
}