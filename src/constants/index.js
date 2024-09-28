import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `Hey there! I’m Subashree Venkatesan Sundharesan – a computer science enthusiast with a knack for turning coffee into code (and occasionally pizza into brilliant ideas). Whether it's building snazzy front-ends, optimizing back-ends, or making computers do all the heavy lifting, I’m on a mission to make tech both smarter and greener. When I’m not wrestling with code, you’ll find me geeking out over the latest tech trends, or brainstorming ways to automate anything (including my laundry). Dive in to see what I’ve been up to - and don’t worry, no bugs here! (At least, not on purpose)`
 
export const ABOUT_TEXT = `I am a dedicated and versatile computer science engineer currently pursuing my Master of Science at Indiana University - Bloomington, with a passion for creating efficient and scalable applications. Before embarking on my master’s adventure, I spent two years in the industry honing my skills as a software engineer, where I learned to turn complex problems into elegant solutions — often while negotiating with stubborn bugs. I completed my Bachelor's in Computer Science and Engineering at Anna University, where I laid a strong foundation in algorithms, data structures, and machine learning. I believe in the power of hands-on projects to translate theory into application; I thrive on learning by doing (and sometimes by failing spectacularly). Throughout my journey, I’ve explored various facets of computer science, including UI design, backend development, database management, machine learning, and data analytics — because why limit myself to just one area of expertise when I can collect them all like Pokémon?`;

export const EDUCATION = [
  {
    year: 'August 2024 - May 2026',
    degree: 'Master of Science in Computer Science',
    institution: 'Indiana University - Bloomington, USA',
    coursework: 'Coursework: Applied Machine Learning, Applied Algorithms, Advanced Database Concepts',
    cgpa: '',
  },
  {
    year: 'August 2018 - May 2022',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Anna University - Chennai, India',
    coursework: 'Coursework: Object Oriented Programming, Data Structures & Algorithms, Database Management System, Machine Learning, Cloud Computing, Computer Networks, Operating Systems, Mobile Computing',
    cgpa: '',
  },
  // Add more education entries as needed
];

 

export const EXPERIENCES = [
  {
    year: "August 2022 - August 2024",
    role: "Software Development Engineer 1",
    company: "Amadeus IT Group",
    description: `Worked on Air, Hotel & Rail flows and developed reusable UI components for authentication of users. Created a module for user notifications ensuring compatibility for 10,000+ production systems. Created stored procedures in Oracle to improve performance of pages in the application - 50% increase. Implemented sustainability-focused features, like CO2 emissions for flights and eco-friendly hotel options. Migrated multiple repositories from BitBucket to GitHub (DevOps) and worked on Re-encryption. Maintained >80% JUnits coverage and deployed to Openshift cloud platform using Jenkins for testing. Automated developers environment setup process which saved time and efforts from weeks to days. Mentored interns and new hires, assisting with development setup and knowledge transfers. Won People’s Choice Award - Cytric Voice (2023)`,
    technologies: ["Java", "SpringBoot", "MongoDB", "OracleSQL", "Podman", "Git"],
  },
  {
    year: "March 2022 - July 2022",
    role: "Software Engineer Intern",
    company: "Amadeus IT Group",
    description: `Modernized a 20 year old tool used for translating texts, by removing pain points and enhancing efficiency. Redesigned front-end from servlet UI to Angular SPA and Angular Material, incorporating NgRx(Redux). Rebuilt back-end logic from Java Servlets to Spring Boot and created REST APIs to perform CRUD operations. Created unit tests using JUnit5, Jasmine & Karma and improved overall performance by 30%`,
    technologies: ["SpringBoot", "Angular", "NgRx", "RESTful-APIs", "JUnit5"],
  },
  {
    year: "July 2021 - June 2022",
    role: "Research Assistant",
    company: "Sri Sivasubramaniya Nadar College of Engineering",
    description: `Proposed a tool for visualization & analysis of crime networks based on Social Network Analysis, using Python, JavaScript, NetworkX, Chart.js, Pyvis, Vis.js. Used data cleaned and extracted from Word documents maintained by the Police Department. Implemented centrality measures, community detection, path finding algorithms, search and filtering features. Demonstrated the tool at the State Crime Records Bureau, Tamilnadu, India`,
    technologies: ["Python", "JavaScript", "NetworkX", "Pyvis", "Vis.js"],
  },
  {
    year: "April 2021 - June 2021",
    role: " Frontend Developer Intern",
    company: "Center for Development of Advanced Computing",
    description: `Developed a dynamic crime visualization tool for the Tamilnadu Police Department (India), enabling users to generate graphs and reports based on customizable conditions and timelines related to criminal cases. Collaborated with the Big Data Team to optimize the dashboard's performance, constructing queries and making API calls to efficiently fetch necessary data from the backend.`,
    technologies: ["Chart.js", "HTML", "CSS", "Javascript", "Jquery", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "AI Fitness Trainer",
    image: project1,
    description:
    "Counts the number of effective reps in an arm workout by detecting land marks and angles in the human body. Integrated with live camera.",
    technologies: ["Python", "Numpy", "OpenCV", "MediaPipe"],
  },
  {
    title: "Recipe Finder Application",
    image: project2,
    description:
      "Responsive web application which displays recipes based on the searched ingredient or dish. Uses Edamam Food API.",
    technologies: ["React", "MaterialUI", "JavaScript", "HTML", "CSS"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing work experience, projects, skills, socials and, contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  {
    title: "Loan Eligibility Predictor",
    image: project4,
    description:
      "Built a model with 82% accuracy with to automate the loan background checking process.",
    technologies: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikitlearn"],
  },
  {
    title: "College Management System",
    image: project5,
    description:
      "Full stack web application that facilitates administration of students, faculty, curriculum, & dorms in a college.",
    technologies: ["Java", "MySQL", "JDBC", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Business Card Builder",
    image: project6,
    description:
      "Website that creates customized, downloadable business cards, with different themes. Lets you to add preferred social media profiles.",
    technologies: ["HTML", "CSS", "JavaScript", "CanvasJS"],
  },
  {
    title: "Weather Forecast App",
    image: project7,
    description:
      "Displays weather for any searched location. Uses Open Weather Map API to get current weather data.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "3209 E 10th St, Bloomington, Indiana - 47408",
  phoneNo: "+1 930 904 4770",
  email: "subavenk@iu.edu",
};
