// ============================================================
// portfolioData.js — Centralized configuration for Arunkumar M's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

import project1Img from '../assets/projects/project1.jpeg';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/project3.png';

export const personalInfo = {
  name: "Arunkumar M",
  firstName: "Arunkumar",
  brandName: "Arunkumar",
  title: "AWS Cloud Engineer | DevOps Engineer",
  location: "Pondicherry, India",
  phone: "+91 9345544582",
  emails: {
    primary: "arunkumarmurali07248@gmail.com",
    secondary: "arunkumarmurali07248@gmail.com",
  },
  summary:
    "Aspiring AWS Cloud Engineer / DevOps Engineer with a B.Tech in Information Technology (2026) and hands-on experience in cloud deployment, CI/CD pipelines, containerization, monitoring, and Infrastructure-as-Code using AWS, Docker, Terraform, Jenkins, and Kubernetes.",
  resumeUrl: "/Arunkumar_M_AWS_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/arun1922",
  linkedin: "https://www.linkedin.com/in/arun-kumar-4a8005308/",
};

export const heroContent = {
  greeting: "Hi, I'm Arunkumar M",
  titleHighlight: "AWS Cloud & DevOps Engineer",
  subtitle:
    "Building scalable cloud infrastructure with AWS, Docker, Terraform, and CI/CD pipelines.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:arunkumarmurali07248@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Arunkumar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Arunkumar_M_AWS_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Arunkumar M</span>, an aspiring AWS Cloud & DevOps Engineer based in Pondicherry, India. I specialize in designing and deploying scalable cloud solutions using AWS core services, automating infrastructure with Terraform, and building robust CI/CD pipelines with Jenkins and Docker.`,
  techStack: ["AWS", "Docker", "Terraform"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I architect and deploy cloud solutions",
  description:
    "I follow a structured, security-first, and automation-driven approach to design, deploy, and monitor production-grade cloud infrastructure.",
  cards: [
    {
      number: "01",
      title: "Plan",
      text: "Analyzing infrastructure requirements, cost constraints, and security needs to design a resilient and scalable AWS architecture.",
    },
    {
      number: "02",
      title: "Provision",
      text: "Using Terraform and IaC principles to provision repeatable, version-controlled AWS infrastructure across environments.",
    },
    {
      number: "03",
      title: "Deploy",
      text: "Automating build, test, and deployment workflows with Jenkins CI/CD pipelines, Docker containers, and AWS EC2.",
    },
    {
      number: "04",
      title: "Monitor",
      text: "Implementing CloudWatch metrics, logs, and alarms alongside Grafana dashboards for full operational visibility.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "AWS Cloud",
      skills: [
        { name: "EC2", level: 88 },
        { name: "S3", level: 90 },
        { name: "IAM", level: 87 },
        { name: "VPC", level: 85 },
        { name: "RDS", level: 82 },
        { name: "Lambda", level: 78 },
        { name: "CloudWatch / CloudTrail", level: 85 },
        { name: "Route 53 / ALB", level: 80 },
      ],
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 87 },
        { name: "Jenkins", level: 83 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 82 },
        { name: "NGINX", level: 78 },
        { name: "CI/CD Pipelines", level: 85 },
      ],
    },
    {
      title: "Monitoring & Infra",
      skills: [
        { name: "CloudWatch", level: 85 },
        { name: "Grafana", level: 78 },
        { name: "Infrastructure as Code", level: 82 },
        { name: "Containerization", level: 85 },
      ],
    },
    {
      title: "Programming & APIs",
      skills: [
        { name: "Python", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 82 },
        { name: "Linux & Shell", level: 85 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 82 },
        { name: "JavaScript", level: 78 },
      ],
    },
  ],
};

// Content Creation Data (repurposed as Cloud Highlights / What I Do)
export const contentCreation = {
  badge: "Cloud Expertise",
  heading: "What I Build in the Cloud",
  description:
    "From provisioning AWS infrastructure to automating deployments — here's a snapshot of the cloud work I do.",
  categories: [
    {
      title: "Cloud Infrastructure",
      description:
        "Designing and deploying multi-tier AWS architectures with VPC, EC2, RDS, S3, and IAM using least-privilege security principles.",
      stats: "AWS Certified",
      icon: "☁️",
    },
    {
      title: "CI/CD Automation",
      description:
        "Building end-to-end Jenkins pipelines with GitHub integration, Docker image builds, and automated deployments on AWS EC2.",
      stats: "Zero-Downtime Deploys",
      icon: "⚙️",
    },
    {
      title: "Containerization",
      description:
        "Containerizing Node.js and Python applications with Docker, orchestrating workloads with Kubernetes on cloud environments.",
      stats: "Docker & K8s",
      icon: "🐳",
    },
    {
      title: "Monitoring & Observability",
      description:
        "Setting up CloudWatch dashboards, log groups, alarms, and Grafana visualizations for real-time infrastructure observability.",
      stats: "24/7 Visibility",
      icon: "📊",
    },
  ],
};

// Leadership Data
export const leadershipList = [
  {
    title: "Kroolo Hackathon — Bangalore",
    description:
      "Competed as a finalist and participant in the Kroolo Hackathon held in Bangalore, demonstrating problem-solving and rapid prototyping under competitive conditions.",
    role: "Finalist / Participant",
    badge: "Achievement",
  },
  {
    title: "AWS Academy — Cloud Foundations",
    description:
      "Completed AWS Academy's Cloud Foundations program, gaining structured knowledge of core AWS services, cloud concepts, and best practices.",
    role: "Certified Learner",
    badge: "AWS Academy",
  },
  {
    title: "AWS Academy — Data Engineering",
    description:
      "Completed the AWS Academy Data Engineering course, covering data pipelines, storage solutions, and analytics services on AWS.",
    role: "Certified Learner",
    badge: "AWS Academy",
  },
  {
    title: "AWS Academy — Generative AI Foundations",
    description:
      "Explored generative AI fundamentals and their integration with AWS cloud services through the AWS Academy program.",
    role: "Certified Learner",
    badge: "AWS Academy",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 — AI Foundations Associate",
    description:
      "Earned the Oracle Cloud Infrastructure 2025 AI Foundations Associate certification, validating understanding of AI/ML concepts on OCI.",
    role: "Associate Certified",
    badge: "Oracle",
  },
];

// Internships / Experience Data
export const internshipsList = [
  {
    organization: "BlueStacks Ltd.",
    role: "Software Development Intern",
    duration: "Bangalore, India (Remote)",
    skills: [
      "Responsive UI Development",
      "Cross-device Compatibility",
      "Web Application Optimization",
      "Code Structure & Maintainability",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex cloud and infrastructure challenges into clean, automated, and modular solutions.",
  },
  {
    name: "Collaboration",
    icon: "🤝",
    desc: "Working across development and operations teams to align software delivery with infrastructure goals.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical architecture decisions, cloud designs, and deployment workflows clearly.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quickly picking up new tools like Grafana, Kubernetes, and Terraform as project needs evolve.",
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Carefully configuring IAM policies, security groups, and network rules following least-privilege principles.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing B.Tech studies, cloud certifications, hands-on projects, and hackathon participation.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Consistently upskilling through AWS Academy, Oracle certifications, and real-world project builds.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Using CloudWatch metrics and logs to diagnose bottlenecks and improve system reliability.",
  },
];

// Projects Data
export const projects = [
  {
    id: "cicd-pipeline",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "End-to-End CI/CD Pipeline for a Microservices Application",
    description:
      "Provisioned AWS infrastructure with Terraform (IaC) for repeatable and automated deployment. Built a Jenkins CI/CD pipeline covering source-code integration, Docker image creation, and deployment on AWS EC2. Integrated GitHub with Jenkins and containerized Node.js/Python components. Implemented Amazon CloudWatch monitoring with metrics, logs, and alarms for operational visibility.",
    image: project3Img,
    techTags: [
      "GitHub",
      "Jenkins",
      "Docker",
      "AWS EC2",
      "Terraform",
      "CloudWatch",
    ],
    links: {
      github: "https://github.com/arun1922",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "3tier-aws",
    number: "02",
    badge: "☁️ Cloud Architecture",
    title: "AWS 3-Tier Web Application Deployment",
    description:
      "Designed and deployed a 3-tier AWS web application architecture spanning networking, compute, database, and storage layers. Established an Amazon VPC with public and private subnets to separate web, application, and database workloads. Deployed application workloads on EC2 behind an Application Load Balancer (ALB). Integrated RDS for the database layer, S3 for object storage, and IAM roles following least-privilege principles.",
    image: project2Img,
    techTags: [
      "Amazon EC2",
      "VPC",
      "Application Load Balancer",
      "RDS",
      "S3",
      "IAM",
    ],
    links: {
      github: "https://github.com/arun1922",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "iot-sentinel",
    number: "03",
    badge: "🛡️ Cyber & Monitoring",
    title: "IoT Sentinel Intrusion Detection System",
    description:
      "Engineered a real-time threat intelligence and network monitoring dashboard for IoT intrusion detection. Processed packet samples with real-time packet capture, attack detection analytics, and automated alert logging for security operations.",
    image: project1Img,
    techTags: [
      "Network Security",
      "Intrusion Detection",
      "Python",
      "Command Center Dashboard",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/arun1922",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data
export const certificates = {
  featured: [
    {
      name: "Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      icon: "🏅",
    },
    {
      name: "Cloud Foundations",
      issuer: "AWS Academy",
      icon: "☁️",
    },
    {
      name: "Data Engineering",
      issuer: "AWS Academy",
      icon: "🗄️",
    },
    {
      name: "Generative AI Foundations",
      issuer: "AWS Academy",
      icon: "🤖",
    },
    {
      name: "Java Programming — Mastering Fundamentals",
      issuer: "Scaler",
      icon: "☕",
    },
    {
      name: "Introduction to MongoDB (2024)",
      issuer: "MongoDB",
      icon: "🍃",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/arun-kumar-4a8005308/",
};

export const educationList = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Sri Manakula Vinayagar Engineering College",
    location: "Pondicherry, India",
    duration: "2022 – 2026 (Expected)",
    score: "CGPA: 7.5 / 10.00",
    badge: "Undergraduate Degree",
    highlights: [
      "Specialization in AWS Cloud Engineering, DevOps Workflows, and System Troubleshooting",
      "Active participant in technical summits and competitive hackathons"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Subramania Bharathi Higher Secondary School",
    location: "Thirukkannur, India",
    duration: "2022",
    score: "79%",
    badge: "Class XII",
    highlights: [
      "Studied Physics, Chemistry, Mathematics, and Computer Science"
    ]
  },
  {
    degree: "Secondary School Certificate (SSLC)",
    institution: "Subramania Bharathi Higher Secondary School",
    location: "Thirukkannur, India",
    duration: "2020",
    score: "72%",
    badge: "Class X",
    highlights: [
      "Core science and mathematics academic foundation"
    ]
  }
];

export const education = {
  degree: "B.Tech – Information Technology",
  institution: "Sri Manakula Vinayagar Engineering College",
  cgpa: "7.5",
  graduation: "2026",
  twelfth: "HSC: 79%",
  tenth: "SSLC: 72%",
};

export const footerContent = {
  taglines: [
    "AWS Cloud Engineering & DevOps",
    "EC2 · S3 · Docker · Terraform · Jenkins",
    "Infrastructure · CI/CD · Monitoring",
  ],
  credential: "B.Tech IT · CGPA 7.5 · 2026",
  copyright: `© ${new Date().getFullYear()} Arunkumar M | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
