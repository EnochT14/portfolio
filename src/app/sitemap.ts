import { getBlogPostMetadata } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

function toDate(value: unknown) {
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPostMetadata();

  const postDates = posts
    .map((post) => toDate(post.metadata.publishedAt))
    .filter((date): date is Date => Boolean(date))
    .sort((a, b) => b.getTime() - a.getTime());

  const latest = postDates[0] ?? new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${DATA.url}/`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${DATA.url}/blog/${post.slug}`,
      lastModified: toDate(post.metadata.publishedAt) ?? latest,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
