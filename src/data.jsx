import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work from "./assets/project-0.jpg";
import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpg";
import Work8 from "./assets/project-8.jpg";
import Work9 from "./assets/project-9.jpg";
import Work10 from "./assets/project-10.jpg";
import Work11 from "./assets/project-11.jpg";
import Work12 from "./assets/project-12.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "About",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "Resume",
    icon: <FaUser className="nav__icon" />,
    path: "/resume",
  },

  {
    id: 3,
    name: "turnos",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/turnos",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name: ",
    description: "Bruce",
  },

  {
    id: 2,
    title: "Last Name: ",
    description: "Banner",
  },

  {
    id: 3,
    title: "Age: ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Shape: ",
    description: "Hugh Dancy",
  },

  {
    id: 6,
    title: "Address: ",
    description: "New York",
  },

  {
    id: 7,
    title: "Status: ",
    description: "Single",
  },

  {
    id: 8,
    title: "Telegram: ",
    description: "t.me/unicornMish",
  },

  {
    id: 9,
    title: "Twitter: ",
    description: "@DRB4NN3R",
  },

  {
    id: 10,
    title: "Languages: ",
    description: "English, portuguese",
  },
];

export const stats = [
  {
    id: 1,
    no: "",
    title: "  <br />  ",
  },

  {
    id: 2,
    no: "",
    title: "   <br />   ",
  },

  {
    id: 3,
    no: "",
    title: " <br />",
  },

  {
    id: 4,
    no: "",
    title: "  <br /> ",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    // icon: <FaBriefcase />,
    year: "",
    title: " <span> </span>",
    desc: "",
    country: "",
  },

  {
    id: 2,
    category: "experience",
    // icon: <FaBriefcase />,
    year: "",
    title: " <span>  </span>",
    desc: "",
    country: "",
  },

  {
    id: 3,
    category: "experience",
    // icon: <FaBriefcase />,
    year: "",
    title: " <span>  </span>",
    desc: "",
    country: "",
  },

  {
    id: 4,
    category: "experience",
    // icon: <FaBriefcase />,
    year: "",
    title: "<span>  </span>",
    desc: "",
    country: "",
  },

  {
    id: 5,
    category: "education",
    // icon: <FaGraduationCap />,
    year: "",
    title: " <span>   </span>",
    desc: "",
    country: "",
  },

  {
    id: 6,
    category: "education",
    // icon: <FaGraduationCap />,
    year: "",
    title: "  <span>  </span>",
    desc: "",
    country: "",
  },

  {
    id: 7,
    category: "education",
    // icon: <FaGraduationCap />,
    year: "",
    title: "  <span> </span>",
    desc: "",
    country: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "DURABILITY",
    percentage: "70",
  },

  {
    id: 2,
    title: "ENERGY",
    percentage: "50",
  },

  {
    id: 3,
    title: "FIGHTING SKILLS    ",
    percentage: "40",
  },

  {
    id: 4,
    title: "INTELLIGENCE",
    percentage: "60",
  },

  {
    id: 5,
    title: "SPEED",
    percentage: "30",
  },

  {
    id: 6,
    title: "STRENGTH",
    percentage: "70",
  },

  {
    id: 7,
    title: "HEALING",
    percentage: "70",
  },

  {
    id: 8,
    title: "AGILITY",
    percentage: "75",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work,
    title: "",
    link: "",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML,React,MongoDB,JWT,REDUX,ReactBootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Cooklense",
        repo: "Repository",
      },
    ],
  },

  {
    id: 2,
    img: Work1,
    title: "Meal Plan",
    link: "https://abstynent.github.io/project1-meal-plan-app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/Abstynent/project1-meal-plan-app",
        repo: "Repository",
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: "MyLittleWebShop",
    link: "https://mylittlewebshop.herokuapp.com/login",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/MyLittleWebShop",
        repo: "Repository",
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: "WeatherApp",
    link: "https://kristiyantefov.github.io/WeatherApp/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/WeatherApp",
        repo: "Repository",
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: "Techblogium",
    link: "https://techblogium.herokuapp.com/homepage",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML,SQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Techblogium",
        repo: "Repository",
      },
    ],
  },
  {
    id: 6,
    img: Work5,
    title: "First Portfolio",
    link: "https://kristiyantefov.github.io/Kris/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Kris",
        repo: "Repository",
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: "Horiseon",
    link: "https://kristiyantefov.github.io/Horiseon/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Horiseon",
        repo: "Repository",
      },
    ],
  },
  {
    id: 8,
    img: Work7,
    title: "Note-Taker",
    link: "https://fakenote.herokuapp.com/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Note-Taker",
        repo: "Repository",
      },
    ],
  },
  {
    id: 9,
    img: Work8,
    title: "Password-Generator",
    link: "https://github.com/kristiyantefov/Password-Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Password-Generator",
        repo: "Repository",
      },
    ],
  },
  {
    id: 10,
    img: Work9,
    title: "TechQuiz",
    link: "https://kristiyantefov.github.io/TechQuiz/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Web Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/TechQuiz",
        repo: "Repository",
      },
    ],
  },
  {
    id: 11,
    img: Work10,
    title: "WorkSchedule",
    link: "https://kristiyantefov.github.io/WorkSchedule/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Web Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/WorkSchedule",
        repo: "Repository",
      },
    ],
  },
  {
    id: 12,
    img: Work11,
    title: "README-Generator",
    link: "https://github.com/kristiyantefov/README-Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Program",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/README-Generator",
        repo: "Repository",
      },
    ],
  },
  {
    id: 13,
    img: Work12,
    title: "Employee-Tracker",
    link: "https://github.com/kristiyantefov/Employee-Tracker",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Program",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,SQL,CMD",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristiyantefov/Employee-Tracker",
        repo: "Repository",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
