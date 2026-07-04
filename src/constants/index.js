import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    typescript,
    nextjs,
    express,
    postgresql,
    NextUp,
    LiquidDMS,
    Faraway,
    InsightFlow,
    LittleLuxuries,
    Wave,
    Chess,
    Freely,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Next.js & React Developer",
      icon: mobile,
    },
    {
      title: "Backend & API Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "?",
      icon:'',
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];

  const projects = [
    {
      name: "NextUp",
      description:
        "A modern productivity platform for planning and tracking work, built with Next.js and TypeScript. Features a clean, responsive UI, secure authentication, and a MongoDB-backed API for real-time task management.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: NextUp,
      source_code_link: "https://github.com/jahanzaib0013-a11y/nextup",
    },
    {
      name: "Liquid DMS",
      description:
        "A full dealer management system covering vehicle inventory, vendors, customers, and sales workflows. I built the backend REST API with Node.js, Express, and MongoDB — including authentication, role-based access, and PDF document generation.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: LiquidDMS,
      source_code_link: "https://github.com/jahanzaib0013-a11y/Liquid-DMS",
    },
    {
      name: "Faraway Admin Panel",
      description:
        "An admin dashboard for a yacht charter business — managing bookings, boats, and content through a fast, type-safe interface built with Next.js, TypeScript, and Tailwind CSS.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Faraway,
      source_code_link: "https://github.com/jahanzaib0013-a11y/faraway-admin-panel",
    },
    {
      name: "InsightFlow",
      description:
        "An analytics and insights dashboard that turns raw data into clear, actionable visualizations. Built with Next.js and TypeScript, deployed live on Vercel.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
      image: InsightFlow,
      source_code_link: "https://github.com/jahanzaib0013-a11y/InsightFlow",
      live_demo_link: "https://insight-flow-ruby.vercel.app",
    },
    {
      name: "Little Luxuries",
      description:
        "A boutique e-commerce storefront with a polished shopping experience — product catalog, cart, and checkout flow. Built with Next.js and TypeScript, deployed live on Vercel.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "e-commerce",
          color: "pink-text-gradient",
        },
      ],
      image: LittleLuxuries,
      source_code_link: "https://github.com/jahanzaib0013-a11y/LittleLuxuries",
      live_demo_link: "https://little-luxuries.vercel.app",
    },
    {
      name: "Wave",
      description:
        "A social platform to share moments and connect with friends — like, comment, share posts, and follow your favorite creators. Built on the MERN stack with a Tailwind CSS interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Wave,
      source_code_link: "https://github.com/jahan-code/Wave",
      live_demo_link: "https://wave-liart.vercel.app",
    },
    {
      name: "Chess-Cloud",
      description:
        "A real-time online chess platform where strategy meets competition — live multiplayer games over Socket.io with an Express backend.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: Chess,
      source_code_link: "https://github.com/jahan-code/Chess-Cloud",
      live_demo_link: "https://chess-cloud.vercel.app",
    },
    {
      name: "Freely",
      description:
        "A simple and secure video conferencing app powered by Zego Cloud — create a private room with a unique ID and password and start your call instantly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "zego-cloud",
          color: "green-text-gradient",
        },
      ],
      image: Freely,
      source_code_link: "https://github.com/jahan-code/freely",
      live_demo_link: "https://freely-snowy.vercel.app",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
