import InsomniacSVG from "../public/companies/insomniac.svg";
import FedelSVG from "../public/companies/fedel.svg";
import WebScrapingSVG from "../public/companies/webscraping.svg";

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Legentic",
    company_logo: '/companies/legentic.png',
    company_link: "https://legentic.com/",
    start_date: "Apr 2025",
    end_date: "Present",
    achievements: [
      'Led UI/UX modernization initiatives, resulting in a significantly improved user experience',
      'Actively participated in strategic decision-making for interface design and user experience improvements',
      'Collaborated closely with cross-functional teams (Product and Backend) to deliver seamless and responsive user experiences',
      'Refactored and cleaned up legacy modules, enhancing performance and maintainability and scalability',
      'Integrated new frontend functionalities and components, improving platform capabilities'
    ],
    tech: ["Vue", "TypeScript", "Quasar", "Python (FastAPI)", "AWS"],
    industry: "Fintech, Data & Analytics",
    links: [{ label: "Legentic Platform", href: "https://legentic.com/" }],
  },
  {
    id: 2,
    role: "Full Stack Developer / Product Owner",
    company: "Fedel",
    company_logo: <FedelSVG />,
    company_link: "https://fedel.app",
    start_date: "Sep 2022",
    end_date: "Present",
    achievements: [
      "Designed and implemented frontend and backend systems, optimizing performance with eﬃcient caching and database management.",
      "Integrated Stripe for payments and AWS services (S3, CloudFront, EventBridge) to enhance scalability and security.",
      "Built and maintained CI/CD pipelines, ensuring faster, reliable deployments and high-quality code.",
      "Helped small businesses leverage the app to gain valuable insights into their customers.",
    ],
    tech: ["React", "Next.js", "Tailwind", "MongoDB", "Redis", "AWS", "Vercel"],
    industry: "Retail & Fintech",
    links: [{ label: "Fedel App", href: "https://fedel.app/" }],
  },
  {
    id: 3,
    role: "Senior Frontend Developer",
    company: "Insomniac Design",
    company_logo: <InsomniacSVG />,
    company_link: "https://insomniacdesign.com/",
    start_date: "Jun 2023",
    end_date: "Feb 2025",
    achievements: [
      "Built a CO2 footprint visualization platform for corporate sustainability insights.",
      "Collaborated closely with back-end developers to integrate RESTful API endpoints into frontend architecture seamlessly.",
      "Implemented and optimized D3.js hierarchical visualizations , enhancing performance and data interaction.",
      "Developed reusable UI components for dynamic form generation based on JSON schemas.",
      "Managed multiple projects simultaneously, adapting to shifting priorities under tight deadlines.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "PostgreSQL",
      "Python (FastAPI)",
      "D3.js",
      "BullMQ",
      "Docker",
    ],
    industry: "Environmental & Sustainability",
    links: [
      { label: "NZDPU", href: "https://nzdpu.com/" },
      { label: "Brand USA", href: "https://www.thebrandusa.com/" },
    ],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "WebScraping API",
    company_logo: <WebScrapingSVG />,
    company_link: "https://www.webscrapingapi.com/",
    start_date: "Mar 2020",
    end_date: "May 2023",
    achievements: [
      "Implemented responsive designs for seamless experiences across all devices and browsers.",
      "Integrated third-party APIs and services to enhance functionality and engagement.",
      "Built and maintained CI/CD pipelines , improving deployment speed and reliability.",
      "Optimized performance for better eﬃciency and SEO through minification, caching, and asset optimization.",
    ],
    tech: [
      "React",
      "Next.js",
      "Tailwind",
      "MySQL",
      "Node.js",
      "CSS/SASS",
      "Laravel",
    ],
    industry: "Data Analytics & Business Intelligence",
    links: [
      { label: "WebScraping API", href: "https://www.webscrapingapi.com/" },
      { label: "SearchData", href: "https://www.searchdata.io/" },
      { label: "Flipnode", href: "https://flipnode.io/" },
    ],
  },
  {
    id: 5,
    role: "Web Developer",
    company: "FreshClick",
    company_logo: '/companies/freshclick.png',
    company_link: "https://freshclick.ro/",
    start_date: "Sep 2017",
    end_date: "Feb 2020",
    achievements: [
      "Built custom, user-centric websites tailored to client needs.",
      "Optimized website performance for faster loading speeds and improved SEO rankings.",
      "Integrated third-party APIs and services to expand functionality.",
      "Diagnosed and resolved bugs and technical issues, ensuring smooth operation.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "WordPress",
      "PHP",
    ],
    industry: "E-commerce",
    links: []
  },
];
