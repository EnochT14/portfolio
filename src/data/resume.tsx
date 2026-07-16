import { Icons } from "@/components/icons";
import {  HomeIcon, NotebookIcon, HammerIcon, FolderKanban, MessageCircleMore, CodeXmlIcon } from "lucide-react";

export const DATA = {
  name: "Enoch Cobbina",
  initials: "EC",
  url: "https://ecobbina.me",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  description:
    "Customer insights pro who still ships code when spreadsheets aren't enough.",
  summary:
    "People person by day, dashboard detective by night. I've led customer experience teams, dug through feedback and KPIs to find what actually moves the needle, and still write code to  ̷b̷r̷e̷a̷k̷ automate the boring stuff 👀. Equal parts coaching, Power BI, and \"why is this SQL query taking forever?\". [ICT grad](/#education) who believes the best insights sit at the intersection of people and data — looking for a team where curiosity, empathy, and clean metrics all get a seat at the table.",
  avatarUrl: "/ec.png",
  skills: [
    "Customer Insights",
    "Market Research",
    "Javascript",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Cybersecurity",
    "Data Visualization",
    "Python",
    "Team Leadership",
    "Performance Coaching",
    "Stakeholder Management",
    "Go",
    "Flutter",
    "Node.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: FolderKanban, label: "Projects" },
    { href: "/#skills", icon: HammerIcon, label: "Skills" },
  ],
  contact: {
    email: "enochcobbina1@gmail.com",
    tel: "+233556296669",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EnochT14",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/enoch-cobbina/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/encobb1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:enochcobbina1@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Concentrix",
      href: "https://www.concentrix.com",
      badges: [],
      location: "Accra, Ghana",
      title: "Team Lead",
      logoUrl: "/concentrix.png",
      start: "Sep 2025",
      end: "Jul 2026",
      description:
        "Led and coached a 22-member customer service team to hit KPI targets (AHT, Call Quality, Adherence, FCR). Used feedback and performance data to drive coaching and service improvements, and earned the \"Game Changer\" Award (April 2026).",
    },
    {
      company: "Concentrix",
      href: "https://www.concentrix.com",
      badges: [],
      location: "Accra, Ghana",
      title: "Customer Service Advisor - DHL eCommerce",
      logoUrl: "/concentrix.png",
      start: "Sep 2024",
      end: "Sep 2025",
      description:
        "Supported customers with high-volume inquiries, achieving a 96% satisfaction rating through empathetic, solutions-focused service.",
    },
    {
      company: "GOIL PLC",
      badges: [],
      href: "https://goil.com.gh",
      location: "Accra, Ghana",
      title: "Consumer Marketing - National Service",
      logoUrl: "/goil.jpg",
      start: "Nov 2023",
      end: "Sep 2024",
      description:
        "Worked with B2B customers on product tailoring and retention, built Power BI dashboards for sales and performance insights, and shipped a Flutter app plus Go automation tool for fuel ordering and notifications.",
    },
    {
      company: "Verge Financial Technologies",
      href: "https://vergepay.org",
      badges: [],
      location: "Accra, Ghana",
      title: "Backend Engineer",
      logoUrl: "/verge.jpg",
      start: "Aug 2023",
      end: "Present",
      description:
        "Developed and maintained cloud-native applications using Golang and Node.js, working with MySQL, PostgreSQL, and MongoDB databases. Implemented CI/CD pipelines and containerized infrastructure (Docker, Ansible), supporting reliable, data-consistent application delivery.",
    },
  ],
  education: [
    {
      school: "Ghana Institute of Management and Public Administration",
      href: "https://gimpa.edu.gh",
      degree: "Bachelor's Degree in Information & Communication Technology - 3.59 GPA",
      logoUrl: "/gimpa.png",
      start: "2019",
      end: "2023"
    },
    {
      school: "Mfantsipim Senior High School",
      href: "https://mfantsipim.com/school",
      degree: "Diploma in General Arts",
      logoUrl: "/botwe.png",
      start: "2014",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "GOIL CMS",
      href: "https://play.google.com/store/apps/details?id=com.enoch.consumer",
      dates: "Dec 2023 - July 2024",
      active: true,
      description:
        "Mobile and Web Application built in Flutter for B2B customers to make fuel orders. Additional functionality developed in ExpressJS and hosted on GCP Cloud Functions [GOIL CMS WEB](https://goilcms.web.app/).",
      technologies: [
        "Flutter",
        "Express.js",
        "PostgreSQL",
        "GCP Cloud Functions",
        "Node.js",
        "Mailgun",
      ],
      links: [
        {
          type: "Website",
          href: "https://play.google.com/store/apps/details?id=com.enoch.consumer",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/cms.mp4",
    },
    {
      title: "GeoBlitz",
      href: "https://hono-cloudflare-fastapi.pages.dev/",
      dates: "Feb 2024 - April 2024",
      active: true,
      description:
        "Designed and developed a High Performance, Globally Distributed API with Redis, Hono, Cloudflare & Next.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "Hono",
        "Redis",
        "Cloudflare"
      ],
      links: [
        {
          type: "Website",
          href: "https://hono-cloudflare-fastapi.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EnochT14/hono-cloudflare_fastapi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/geoblitz.mp4",
    },
    {
      title: "ReconTools",
      href: "https://reconciliation.pages.dev/",
      dates: "June 2024 - July 2024", 
      active: true,
      description:
        "Developed a program to speed up manual reconciliation on customer accounts at GOIL PLC. Implemented an API that performs data cleaning and reconciliation entirely in Go and Dockerized for scalability and selfhosting (Hosted on Cloudflare Pages)",
      technologies: [
        "HTML & CSS",
        "Go",
        "Docker",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source API",
          href: "https://github.com/EnochT14/final-recon",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Frontend",
          href: "https://github.com/EnochT14/recon-cloudflare-pages/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recon.png",
      video: "",
    },
    {
      title: "Firebase Realtime to Sheets",
      href: "https://github.com/EnochT14/firebase-realtime-to-sheets",
      dates: "May 2024",
      active: true,
      description:
      "This open source project was built to syncronize data between firebase realtime and google sheets. Essentially CRUD for Google Sheets.",
      technologies: [
        "Javascript",
        "Firebase",
        "GCP"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EnochT14/firebase-realtime-to-sheets",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fbase.png",
      video:
        "",
    },
    {
      title: "Ghana Civil Aviation Dashboard",
      href: "https://ecobbina.me/projects/1-gcaa/",
      dates: "March 2023",
      active: true,
      description:
      "A dashboard was created using Tableau to provide the Ghana Civil Aviation Authority with insights into current market conditions and trends. The goal was to help the authority make informed decisions to improve efficiency, save time, and reduce costs. Vizualization data was obtained from [GCAA](https://www.gcaa.com.gh/web/?p=126) and cleaned using MS Excel & Tableau.",
      technologies: [
        "Data Cleaning",
        "Tableau",
        "Data Visualization",
      ],
      links: [
        {
          type: "Website",
          href: "https://public.tableau.com/views/GhanaCivilAviationAuthorityDasboard/FlightOperations?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dash.png",
      video:
        "",
    }
  ],
  Certifications: [
    {
      title: "Fortinet Certified Associate Cybersecurity",
      dates: "July, 2026",
      location: "Remote, Fortinet",
      description:
        "Earned the Fortinet Certified Associate Cybersecurity credential, covering foundational cybersecurity concepts, threat awareness, and security best practices. Valid through July 2028.",
      image: "/fortinet.png",
      links: [
        {
          title: "Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.fortinet.com/training/cybersecurity-professionals",
        },
      ],
    },
    {
      title: "PwC Switzerland - Power BI Job Simulation",
      dates: "May, 2024",
      location: "Remote, Forage",
      description:
        "Gained practical experience in using Microsoft Power BI for data visualization and analysis. This simulation involved real-world scenarios where I was tasked with importing and transforming data, creating interactive dashboards, and generating insightful reports. I gained hands-on experience in data modeling, creating visualizations, and using DAX (Data Analysis Expressions) to perform advanced calculations.",
      image: "/forage.jpg",
      links: [
        {
          title: "Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_bM5BKWCDBf9iRALWm_1716121255273_completion_certificate.pdf",
        },
      ],
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified DevOps Professional",
      dates: "August, 2023",
      location: "Remote, Oracle",
      description:
        "This certification demonstrates my proficiency in implementing and managing DevOps practices using Oracle Cloud Infrastructure (OCI). This certification covers a comprehensive range of topics, including continuous integration and continuous deployment (CI/CD) pipelines, infrastructure as code (IaC) using Terraform, containerization with Docker and Kubernetes, and automation with tools like Ansible. I gained hands-on experience in designing, deploying, and managing scalable and secure cloud-native applications, as well as implementing best practices for monitoring, logging, and security in a DevOps environment.",
      image:
        "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/oracle.png",
      links: [
        {
          title: "OCI Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D44B96884C7877FF263BE62B4CB93FB22525C2A76E99011B51019F531F1708C9",
        },
      ],
    },
    {
      title: "Google Data Analytics Professional Certificate",
      dates: "December, 2022",
      location: "Remote, Coursera",
      description:
        "This certification covers a wide range of topics, including data collection, data cleaning, data analysis, and data visualization. I gained hands-on experience in using tools like Tableau, Google Sheets, and R programming to analyze data and derive meaningful insights. Additionally, I learned about data ethics, data privacy, and the importance of data-driven decision-making.",
      image: "/coursera.png",
      links: [
        {
          title: "Credly Badge",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/7cadd345-2dc6-4a97-81d8-1fef2084cf07/public_url",
        },
      ],
    },
  ],
} as const;
