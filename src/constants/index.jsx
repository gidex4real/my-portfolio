import { js, tailwind, react, ts, next, cSharp, dotnet, docker,php, laravel,wordpress, angular,bootstrap, mongodb,mysql,microsoft, AIA, ijeuwa, myarigo, schooltrack, mymedia, mputu
} from "../assets";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
    label: "Go to Home Section",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
    label: "Go to About Section",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
    label: "Go to Projects Section",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
    label: "Go to Contact Section",
  },
];

export const Skills = [
  {
    icon: js,
    text: "JavaScript",
  },
  {
    icon: php,
    text: "PHP",
  },
  {
    icon: ts,
    text: "TypeScript",
  },
  {
    icon: cSharp,
    text: "C#",
  },
  {
    icon: dotnet,
    text: "ASP.NET",
  },
  {
    icon: react,
    text: "React",
  },
  {
    icon: angular,
    text: "Angular",
  },
  {
    icon: next,
    text: "Next",
  },
  {
    icon: laravel,
    text: "Laravel",
  },
  {
    icon: wordpress,
    text: "Wordpress",
  },
  {
    icon: tailwind,
    text: "Tailwind",
  },
  {
    icon: bootstrap,
    text: "Bootstrap",
  },
  {
    icon: docker,
    text: "Docker",
  },
  {
    icon: mongodb,
    text: "mongoDB",
  },
  {
    icon: mysql,
    text: "mySQL",
  },
  {
    icon: microsoft,
    text: "MicrosoftSQL",
  },
  

];

export const Projects = [
  {
    image: schooltrack,
    stack: "C# | DotNet | Angular | Microsoft SQL | TypeScript | Bootstrap-CSS",
    name: "School Track",
    live: "https://myschooltrack.com/#/",
    github: "https://github.com/gidex4real/school-track-app-frontend",
    liveLinkText: "Live Website for School Track App"
  },
  {
    image: myarigo,
    stack: "PHP | Laravel | JavaScript | CSS | BootStrap-CSS | mySQL ",
    name: "MyArigo E-commerce App",
    github: "https://github.com/gidex4real/myarigo-laravel",
    live: "https://myarigo.com/",
    githubLinkText: "GitHub Repository for MyArigo App",
    liveLinkText: "Live Website for MyArigo App"
  },
  {
    image: ijeuwa,
    stack: "PHP | Smarty | JavaScript | HTML | CSS | BootStrap-CSS | mySQL",
    name: "Ijeuwa Social Media App",
    github: "https://github.com/gidex4real/ijeuwa",
    live: "https://ijeuwa.com",
    githubLinkText: "GitHub Repository for Ijeuwa Social Media App",
    liveLinkText: "Live Website for Ijeuwa Social Media App"
  },
  {
    image: mputu,
    stack: "PHP | Laravel | React | JavaScript | Bootstrap-CSS | mySQL",
    name: "LogicSwap-Tech",
    github: "https://github.com/TRIPLE-ADE/LogicSwap",
    live: "https://www.logicswaptech.com.ng/",
    githubLinkText: "GitHub Repository for LogicSwap-Tech",
    liveLinkText: "Live Website for LogicSwap-Tech"
  },
  {
    image: AIA,
    stack: "PHP | WordPress | mySQL ",
    name: "Africa Illustrious Awards",
    live: "https://africaillustriousawards.org/",
    githubLinkText: "GitHub Repository for Africa Illustrious Awards",
    liveLinkText: "Live Website for Africa Illustrious Awards"
  },
  // {
  //   image: mymedia,
  //   stack: "PHP | WordPress | mySQL",
  //   name: "MyMedia Africa",
  //   live: "https://metro-carousel.netlify.app/",
  //   githubLinkText: "GitHub Repository for MyMedia Africa",
  //   liveLinkText: "Live Website for MyMedia Africa"
  // },
];

export const FootersLink = [
  {
      id: 1,
      icon: <FaTwitter/>,
      link: 'https://twitter.com/gidex4real',
      label: "Visit my Twitter",
  },
  {
      id: 2,
      icon: <FaLinkedinIn/>,
      link: 'https://www.linkedin.com/in/iamsimongideon',
      label: "Visit my LinkedIn",
  },
  {
      id: 3,
      icon: <FaGithub/>,
      link: 'https://github.com/gidex4real',
      label: "Visit my GitHub",
  },
];
