import React from "react";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

import amadeusLogo from "../assets/experience/amadeusLogo.png";
import simonsLogo from "../assets/experience/simonsLogo.jpeg";
import luddyLogo from "../assets/experience/luddyLogo.png";
import renisacLogo from "../assets/experience/renisacLogo.jpeg";
import maurerLogo from "../assets/experience/maurerLogo.jpeg";
import ssnLogo from "../assets/experience/ssnLogo.png";
import cdacLogo from "../assets/experience/cdacLogo.jpeg";


export const HERO_CONTENT = `Hey there! I'm Suba. I am a computer science enthusiast with a knack for turning coffee into code (and occasionally pizza into brilliant ideas). Whether it's building snazzy front-ends, optimizing back-ends, or making computers do all the heavy lifting, I'm on a mission to make tech both smarter and greener. When I'm not wrestling with code, you'll find me geeking out over the latest tech trends, or brainstorming ways to automate anything (including my laundry). Dive in to see what I've been up to. And don't worry, no bugs here! (atleast not on purpose)`
 
export const ABOUT_TEXT = `I am a dedicated and versatile computer science engineer currently pursuing my MS in Computer Science at Indiana University Bloomington, driven by a passion for crafting efficient and scalable applications that deliver exceptional value. Prior to my academic journey, I gained two years of industry experience as a software engineer where I honed my ability to transform complex challenges into elegant solutions. I hold a Bachelor's in Computer Science and Engineering from Anna University, India, where I built a robust foundation in algorithms, data structures, and machine learning. I am a firm believer in the power of hands-on projects to bridge theory and practice, thriving on practical experience to deepen my understanding. Throughout my career, I have explored various facets of computer science - including UI design, backend development, database management, machine learning, and data analytics - because why limit myself to just one area of expertise when I can collect them all like Pokémon?`

export const EDUCATION = [
  {
    year: 'August 2024 - May 2026',
    degree: 'Master of Science in Computer Science',
    logo: luddyLogo,
    institution: 'Indiana University - Bloomington, USA',
    coursework: 'Coursework: Applied Machine Learning, Applied Algorithms, Advanced Database Concepts, Software Engineering, Native Mobile Application Development (Android and iOS), Applied Database Technologies, Computer Networks, Human Computer Interaction, System Security',
    cgpa: '3.87/4',
  },
  {
    year: 'August 2018 - May 2022',
    degree: 'Bachelor of Engineering in Computer Science',
    logo: ssnLogo,
    institution: 'Anna University - Chennai, India',
    coursework: 'Coursework: Object Oriented Programming, Data Structures & Algorithms, Database Management System, Machine Learning, Cloud Computing, Computer Networks, Operating Systems, Mobile Computing',
    cgpa: '8.5/10',
  },
  // Add more education entries as needed
];

 

export const EXPERIENCES = [
    {
    year: "Jan 2026 - Present",
    role: "Software Engineer Intern, Observability",
    company: "REN-ISAC/OmniSOC",
    logo: renisacLogo,
    description: `Contributed to security monitoring and alerting systems supporting 700+ higher-education and research institutions nationwide. Built and maintained Python-based monitoring tools backed by Elasticsearch for 24/7 security operations workflows. Improved alert reliability by adding retry logic and failure handling to reduce missed alerts in production. Implemented feed health checks to detect stalled or degraded data pipelines impacting downstream security visibility. Supported systems used by a national CSIRT serving the research and education community.`,
    technologies: ["Python", "Elasticsearch", "Security Monitoring", "Alerting", "CSIRT"],
  },
  {
    year: "Jan 2026 - Present",
    role: "Research Software Engineer",
    company: "Indiana University Maurer School of Law",
    logo: maurerLogo,
    description: `Built backend data pipelines in Python to extract, validate, and normalize court-document metadata (case IDs, dates, actors, document types, language, URLs) into structured datasets for analysis. Automated large-batch document processing workflows using IU Quartz (HPC) to support scalable ingestion and compute-intensive tasks. Designed reusable extraction components with pagination handling, data cleaning, and fault tolerance to support long-running jobs across large repositories. Collaborated with researchers to standardize schemas and outputs for downstream analytics and visualization. Selected as one of the Top 5 CS students by IU’s Faculty Assistance in Data Science (FADS) program to work on interdisciplinary research on secrecy and redaction practices in international war crimes tribunals.`,
    technologies: ["Python", "HPC (Quartz)", "ETL", "Data Cleaning", "Web Scraping"],
  },
  {
    year: "Aug 2025 - Present",
    role: "Graduate Teaching Assistant",
    company: "Indiana University (Luddy School of Informatics)",
    logo: luddyLogo,
    description: `Mentored 70+ students in Python, Data Structures, NumPy, Pandas, Matplotlib, and Scikit-Learn for a graduate-level course (DSCI D590: Introduction to Python Programming). Led a team of teaching assistants to deliver debugging support and hands-on guidance in weekly labs, assignments, and office hours. Co-developed and delivered lectures with the professor through practical coding exercises, quizzes, and structured problem-solving sessions. Supported end-to-end student projects by grading assignments, reviewing code, improving modularity, and reinforcing best practices in algorithms, data analysis, and visualization.`,
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
  },
  {
    year: "May 2025 - Aug 2025",
    role: "Software Engineer Intern",
    company: "Simons Foundation / Flatiron Institute",
    logo: simonsLogo,
    description: `Designed and deployed an interactive High Performance Computing (HPC) Benchmarks application centralizing 1,000+ runs and 20,000+ datapoints across 30+ CPU/GPU architectures, reducing manual comparison time by 70%+. Built Python ETL pipelines to parse 10,000+ raw files (CSV, YAML, JUBE logs), perform unit conversions and data cleaning, and normalize datasets into a unified MongoDB schema, cutting query time by 50%. Developed RESTful APIs with FastAPI delivering sub-second response times for complex queries, enabling real-time hardware comparisons, scaling analysis, anomaly detection, and drill-down diagnostics. Built a responsive React frontend with Material UI, Chart.js, and D3 to deliver 20+ interactive visualizations; integrated IP-based access control to safeguard sensitive results.`,
    technologies: ["Python", "FastAPI", "MongoDB", "React", "ETL"],
  },
  {
    year: "August 2022 - August 2024",
    role: "Software Development Engineer 1",
    company: "Amadeus IT Group",
    logo: amadeusLogo,
    description: `Worked on Air, Hotel & Rail flows and developed reusable UI components for authentication of users. Created a module for user notifications ensuring compatibility for 10,000+ production systems. Created stored procedures in Oracle to improve performance of pages in the application - 50% increase. Implemented sustainability-focused features, like CO2 emissions for flights and eco-friendly hotel options. Migrated multiple repositories from BitBucket to GitHub (DevOps) and worked on Re-encryption. Maintained >80% JUnits coverage and deployed to Openshift cloud platform using Jenkins for testing. Automated developers environment setup process which saved time and efforts from weeks to days. Mentored interns and new hires, assisting with development setup and knowledge transfers. Won People’s Choice Award - Cytric Voice (2023)`,
    technologies: ["Java", "SpringBoot", "MongoDB", "OracleSQL", "Podman", "Git"],
  },
  {
    year: "March 2022 - July 2022",
    role: "Software Engineer Intern",
    company: "Amadeus IT Group",
    logo: amadeusLogo,
    description: `Modernized a 20 year old tool used for translating texts, by removing pain points and enhancing efficiency. Redesigned front-end from servlet UI to Angular SPA and Angular Material, incorporating NgRx(Redux). Rebuilt back-end logic from Java Servlets to Spring Boot and created REST APIs to perform CRUD operations. Created unit tests using JUnit5, Jasmine & Karma and improved overall performance by 30%`,
    technologies: ["SpringBoot", "Angular", "NgRx", "RESTful-APIs", "JUnit5"],
  },
  {
    year: "July 2021 - June 2022",
    role: "Research Assistant",
    logo: ssnLogo,
    company: "Sri Sivasubramaniya Nadar College of Engineering",
    description: `Proposed a tool for visualization & analysis of crime networks based on Social Network Analysis, using Python, JavaScript, NetworkX, Chart.js, Pyvis, Vis.js. Used data cleaned and extracted from Word documents maintained by the Police Department. Implemented centrality measures, community detection, path finding algorithms, search and filtering features. Demonstrated the tool at the State Crime Records Bureau, Tamilnadu, India`,
    technologies: ["Python", "JavaScript", "NetworkX", "Pyvis", "Vis.js"],
  },
  {
    year: "April 2021 - June 2021",
    role: " Frontend Developer Intern",
    company: "Center for Development of Advanced Computing",
    logo: cdacLogo,
    description: `Developed a dynamic crime visualization tool for the Tamilnadu Police Department (India), enabling users to generate graphs and reports based on customizable conditions and timelines related to criminal cases. Collaborated with the Big Data Team to optimize the dashboard's performance, constructing queries and making API calls to efficiently fetch necessary data from the backend.`,
    technologies: ["Chart.js", "HTML", "CSS", "Javascript", "Jquery", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Personal AI Assistant",
    link: "https://github.com/subashreevs/personal-ai-assistant", // update if different
    image: project9,
    description:
      "Developed a serverless AI assistant using a full Retrieval-Augmented Generation (RAG) pipeline. Integrated OpenAI GPT-4.1-mini for reasoning and text-embedding-3-small for semantic search, powered by Pinecone VectorDB. Automated document ingestion using AWS S3 and deployed the FastAPI backend on AWS Lambda via Mangum. Built a responsive React-based chat interface for real-time interactions.",
    technologies: [
      "FastAPI",
      "OpenAI API",
      "Pinecone",
      "AWS Lambda",
      "AWS S3",
      "React",
    ],
  },
  {
    title: "AI Learning Planner",
    link: "https://github.com/subashreevs/ai-learning-path-planner", // update if different
    image: project10,
    description:
      "Built an AI-driven platform that generates personalized learning roadmaps from user-provided topics or resumes. Leveraged DeepSeek API and Llama 3 for LLM inference, Pinecone VectorDB for semantic retrieval, and AWS Textract for resume parsing. Developed a FastAPI backend and a responsive React + TypeScript + Tailwind frontend for real-time roadmap generation.",
    technologies: [
      "FastAPI",
      "React",
      "Pinecone VectorDB",
      "DeepSeek",
      "Ollama",
      "AWS Textract",
    ],
  },
  {
    title: "Memories App",
    link: "https://github.com/subashreevs/mern-stories-app",
    image: project8,
    description: 
    "Developed a full-stack MERN application that allows users to create, edit, manage posts with features like image uploads, JWT-based authentication, pinned highlights, and advanced search/filtering by date, location, or keywords.",
    technologies: [ "React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
  },
  {
    title: "AI Fitness Trainer",
    link: "https://github.com/subashreevs/AIFitnessTraining-PoseEstimation",
    image: project1,
    description:
    "Counts the number of reps in a workout by detecting land marks and angles in a human body. Integrated with live camera.",
    technologies: ["Python", "Numpy", "OpenCV", "MediaPipe"],
  },
  {
    title: "Weather Forecast App",
    link: "https://github.com/subashreevs/flutter-weather-app",
    image: project7,
    description:
      "Displays weather for current or any searched location. Uses Open Weather Map API to get current weather data.",
    technologies: ["Flutter", "Dart", "Android Studio", "REST APIs", 'Lottie Animations', "iOS"],
  },
  {
    title: "Portfolio Website",
    link: "https://subashreevs.vercel.app/",
    image: project3,
    description:
      "A personal portfolio website showcasing work experience, projects, skills, socials and, contact information.",
    technologies: ["React", "javaScript", "HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Recipe Finder Application",
    link: "https://github.com/subashreevs/ReactRecipeFinder",
    image: project2,
    description:
    "Responsive web application which displays recipes based on the searched ingredient or dish. Uses Edamam Food API.",
    technologies: ["React", "MaterialUI", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Business Card Builder",
    link: "https://github.com/subashreevs/BusinessCardBuilder",
    image: project6,
    description:
      "Website that creates customized, downloadable business cards, with different themes. Lets you to add preferred social media profiles.",
    technologies: ["HTML", "CSS", "JavaScript", "CanvasJS"],
  },
  {
    title: "College Management System",
    link: "https://github.com/subashreevs/StudentManagementSystem",
    image: project5,
    description:
      "Full stack web application that facilitates administration of students, faculty, curriculum, & dorms in a college.",
    technologies: ["Java", "MySQL", "JDBC", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Loan Eligibility Predictor",
    link: "https://github.com/subashreevs/LoanEligibilityPrediction",
    image: project4,
    description:
      "Built a model with 82% accuracy with to automate the loan background checking process.",
    technologies: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikitlearn"],
  },
];

export const CONTACT = {
  address: "3209 E 10th St, Bloomington, Indiana - 47408",
  phoneNo: "+1 930 904 4770",
  email: "subavenk@iu.edu",
};
