// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png'
import cssLogo from '../assets/tech_logo/css.png';
import sassLogo from '../assets/tech_logo/sass.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import angularLogo from '../assets/tech_logo/angular.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import gsapLogo from '../assets/tech_logo/gsap.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import springbootLogo from '../assets/tech_logo/springboot.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import mcLogo from '../assets/tech_logo/mc.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import postgreLogo from '../assets/tech_logo/postgre.png';



// Education Section Logo's

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import college from '../assets/kiet.png'
import school from '../assets/school.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      img: college,
      school: "KIET Group of Institutions, Gaziabad",
      date: "Sept 2023 - July 2027",
      grade: "8.9 CGPA",
      // desc: "I am Persuing my Bachelor degree in Computer Science(B.TECH) from KIET Group of Institutions, Gaziabad. In Kiet I gained a strong foundation in programming, software development, and computer science principles. ",
      degree: "Bachelor of Technology",
    },
    {
      id: 1,
      img: school,
      school: "Christ the king inter college",
      date: "Apr 2022 - March 2023",
      grade: "91%",
      // desc: "I completed my class 12 education from Christ the king Inter College,Tundla, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ISC(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: school,
      school: "Christ the king inter college",
      date: "Apr 2020 - March 2021",
      grade: "93%",
      // desc: "I completed my class 10 education from Christ the king Inter College,Tundla, under the ICSE board , where I studied Science with Computer.",
      degree: "ICSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 1,
     title: "QuickShow",
      description:
        "Build and deploy a Full Stack Movie Ticket Booking Website using MERN Stack In this full stack project, user can signup, explore the movies and book the tickets. While booking tickets, user can choose their preferred seats. ",
      image: project1,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Clerk"],
      github: "https://github.com/chaudhary-sneha14",
      webapp: "https://quick-show-dtc6.vercel.app/",
    },
    {
      id: 2,
      title: " Doctor Appointment Booking System",
      description:
       "MERN Stack Doctor Appointment Booking App using React JS, MongoDB, Express and Node JS This full stack appointment booking system can be used by a doctor or a hospital.",
      image: project2,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Clerk"],
      github: "https://github.com/chaudhary-sneha14",
      webapp: "https://prescripto-chi-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Pokémon website",
      description:
        "Used React to develop a functional and responsive frontend for a website based on PokemonApplication.",
      image:project3,
      tags: ["React JS"],
      github: "https://github.com/chaudhary-sneha14",
      webapp: "https://pokemon-by-sneha.netlify.app/",
    },
   
  
  ];  