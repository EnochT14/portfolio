import { Icons } from "@/components/icons";
import {  HomeIcon, NotebookIcon, HammerIcon, FolderKanban, MessageCircleMore, CodeXmlIcon } from "lucide-react";

export const DATA = {
  name: "Enoch Cobbina",
  initials: "EC",
  url: "https://ecobbina.me",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  description:
    "SWE building scalable backend systems..",
  summary:
    "Tired of clicking buttons? Me too. That's why I write code to automate and  ̷b̷r̷e̷a̷k̷ things in the name of improvement 👀. Cloud enthusiast, DevOps dabbler and recent grad with a [degree](/#education) in Information & Communication Technology. Looking to join a development team where I can contribute and grow.",
  avatarUrl: "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/ec.png",
  skills: [
    "Go",
    "Flutter",
    "ExpressJS",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Redis",
    "Nginx",
    "Kubernetes",
    "Git",
    "Arduino",
    "Embedded Systems",
    "Azure",
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
      company: "Verge Financial Technologies",
      href: "https://vergepay.org",
      badges: [],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/verge.jpg",
      start: "Aug 2023",
      end: "Present",
      description:
        "I lead the development of Mobile Money solutions that leverage modern technologies to enhance user experiences and streamline transactions. My primary focus is on creating secure and efficient payment systems that integrate NFC technology for seamless payments, and ensuring robust data security through advanced encryption methods. I also work extensively with embedded systems, utilizing the ESP32 platform, and integrate various APIs to facilitate smooth interactions with our Mobile Money services. My role involves both hardware and software development, ensuring that our products are not only functional but also user-friendly and secure.",
    },
    {
      company: "Goil PLC",
      badges: [],
      href: "https://goil.com.gh",
      location: "Accra, Ghana",
      title: "Software Engineer/Consumer Marketing - NSP",
      logoUrl: "/goil.jpg",
      start: "Nov 2023",
      end: "Oct 2024",
      description:
        "During my tenure at Goil PLC, I developed a Flutter application that streamlined the fuel ordering process for our B2B customers. This application allowed customers to place fuel orders receive updates on the delivery process through push notifications. Additionally, the system sent automated emails to remind customers of upcoming invoices. The project was successfully piloted, enhancing customer satisfaction and operational efficiency. Tech stack included Flutter for the mobile and web app, Firebase for backend services, and Express.js/Node.js for serverless functions.",
    }
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
      title: "PwC Switzerland - Power BI Job Simulation",
      dates: "May, 2024",
      location: "Remote",
      description:
        "Gained practical experience in using Microsoft Power BI for data visualization and analysis. This simulation involved real-world scenarios where I was tasked with importing and transforming data, creating interactive dashboards, and generating insightful reports. I gained hands-on experience in data modeling, creating visualizations, and using DAX (Data Analysis Expressions) to perform advanced calculations.",
      image:
        "/forage.jpg",
      links: [
        {
          title: "Certification",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_bM5BKWCDBf9iRALWm_1716121255273_completion_certificate.pdf",
        }
      ],
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified DevOps Professional ",
      dates: "August, 2023",
      location: "Remote, Oracle",
      description:
        "This certification demonstrates my proficiency in implementing and managing DevOps practices using Oracle Cloud Infrastructure (OCI). This certification covers a comprehensive range of topics, including continuous integration and continuous deployment (CI/CD) pipelines, infrastructure as code (IaC) using Terraform, containerization with Docker and Kubernetes, and automation with tools like Ansible. I gained hands-on experience in designing, deploying, and managing scalable and secure cloud-native applications, as well as implementing best practices for monitoring, logging, and security in a DevOps environment.",
      image:
        "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/oracle.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "OCI Certifcation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D44B96884C7877FF263BE62B4CB93FB22525C2A76E99011B51019F531F1708C9",
        }
      ],
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      dates: "August, 2023",
      location: "Remote, Oracle",
      description:
        "Successfully completed this certification to demonstrate my proficiency in the foundational concepts and services of Oracle Cloud Infrastructure (OCI). This certification covers Cloud Concepts, Networking and OCI Cloud Architecture.",
      image:
        "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/oracle.png",
      links: [
        {
          title: "OCI Certifcation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=14267E8F81FF37459AAAD40CEA95BD49185D829D72796AAA5A8881F4254DA21D",
        },
      ],
    },
    {
      title: " Google Data Analytics",
      dates: "December, 2022",
      location: "Remote, Coursera",
      description:
        "This certification covers a wide range of topics, including data collection, data cleaning, data analysis, and data visualization. I gained hands-on experience in using tools like Tableau, Google Sheets, and R programming to analyze data and derive meaningful insights. Additionally, I learned about data ethics, data privacy, and the importance of data-driven decision-making.",
      image:
        "/coursera.png",
      mlh: "https://pub-b5c6aadb67354fe7a22eab542f04703f.r2.dev/coursera.png",
      links: [
        {
          title: "Credly Badge",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/7cadd345-2dc6-4a97-81d8-1fef2084cf07/public_url",
        }
      ],
    }
  ],
} as const;
