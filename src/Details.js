// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png"; // Make sure to replace 'profile.jpg' with your photo
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import moveit from "./assets/techstack/moveit1.png";
import dagster from "./assets/techstack/dagster.svg";
// Porject Images
import projectImage1 from "./assets/projects/project1.png"; // Replace these images
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "José Domínguez",
  tagline: "Robotics Engineer & Software Developer",
  img: profile,
  about: `Robotics and Digital Systems Engineering student at Tecnológico de Monterrey, passionate about developing complex software solutions. With experience in service robotics, AI-powered detection systems, and full-stack development, I seek to apply my skills to create innovative and high-impact technology.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/jose-luis-dominguez-morales/",
  github: "https://github.com/JLDominguezM",
  twitter: "",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineering Intern On Campus",
    Company: `Tecnológico de Monterrey (ITESM)`,
    Location: "Monterrey, NL, Mexico",
    Type: "Internship",
    Duration: "August 2024 - Present",
     Description: [
      "Developed a person detection and tracking system using YOLOv8 and PyTorch, achieving over 400,000 detections to enhance public safety.",
      "Deployed a secure IoT network with 30+ cameras and sensors using LoRaWAN and 5G for real-time monitoring.",
    ],
  },
  {
    Position: "Software Engineering Intern",
    Company: `Oneila`,
    Location: "Monterrey, NL, Mexico",
    Type: "Internship",
    Duration: "October 2024 - March 2025",
    Description: [
      "Developed and published a web scraping platform wrapper for Puppeteer and Playwright on npm for internal team use.",
      "Built data pipelines to process public fiscal data, utilizing SQL Server, Azure Blob Storage, Express, and Docker.",
    ],
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "B.S. in Robotics and Digital Systems",
    Company: `Tecnológico de Monterrey`,
    Location: "Monterrey, NL, Mexico",
    Type: "Undergraduate",
    Duration: "Expected Graduation: June 2027",
    
  },
  {
    Position: "Software Developer Technician Certificate",
    Company: `School of Mechanical and Electrical Engineering (FIME)`,
    Location: "Monterrey, NL, Mexico",
    Type: "Certificate",
    Duration: "Certified: July 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  ros: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original-wordmark.svg',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-plain-wordmark.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
  sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  matlab: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg',
  r: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg',
  php : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  c : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  node : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  opencv : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  azure : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  ubuntu : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg',
  // windows : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
  streamlit : 'https://streamlit.io/images/brand/streamlit-mark-color.png',
  angular : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  flutter : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  unity : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  postgresql : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  arduino : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg',
  pupeteer : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg',
  playwright : 'https://playwright.dev/img/playwright-logo.svg',
  dagster : dagster,
  moveit : moveit,
  vite : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "BonTable (SaaS Restaurant Platform)",
    image: projectImage1,
    description: `Architected a full-stack SaaS web app to modernize the dining experience, featuring an admin dashboard for CRUD menu management and a public interface for reservations.`,
    techstack: "React, Vite, Tailwind CSS, Firebase",
    githubLink: "https://github.com/JLDominguezM/BonTable",
  },
  {
    title: "Emergency Act (1st Place Waymo Challenge)",
    image: projectImage2,
    description: `Developed a real-time fall detection system for public transport with 97% accuracy using YOLOv8 and OpenCV, integrating GPT for emergency response automation.`,
    techstack: "Python, YOLOv8, OpenCV, Streamlit, MongoDB",
    previewLink: "https://devpost.com/software/emergencyact",
    githubLink: "https://github.com/JocelynVelarde/Shell-Hacks-2024",
  },
  {
    title: "Roborregos RoboCup @HOME",
    image: projectImage3,
    description: `Co-led the team's migration to ROS2 and developed advanced manipulation algorithms using MoveIt to perform complex pick, place, and pour tasks for a service robot.`,
    techstack: "ROS2, C++, Python, MoveIt Framework",
    previewLink: "https://athome.roborregos.com/Overview/Media/",
    githubLink: "https://github.com/RoBorregos/home2",
  },
  {
    title: "RoboCup Rescue Maze Challenge",
    image: projectImage4,
    description: `Developed an autonomous robot to navigate hazardous mazes and identify victims using visual markers. Implemented PID controllers and sensor data filters for precise motion control.`,
    techstack: "C++, PID Control, Sensor Fusion",
    previewLink: "https://docs.rbrgs.com/RescueMaze/2024/Control/",
    githubLink: "https://github.com/RoBorregos/RescueMaze2024",
  },
];

export const awardDetails = [
  {
    place: "1st Place",
    event: "Waymo Challenge @ ShellHacks (Florida)",
  },
  {
    place: "6th International Place",
    event: "@HOME RoboCup (Brazil)",
  },
  {
    place: "2nd National Place",
    event: "@HOME-TMR (Mexico) ",
  },
  {
    place: "2nd National Place",
    event: "RCMJ-TMR (Mexico)",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "joseldominguezmorales@gmail.com",
  phone: "+528128620427",
};