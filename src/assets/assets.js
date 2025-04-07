import votingApp_img from './Voting app image.jpg'
import animatedWeb_img from './animated_web_img.jpg';
import JobPortal from './getandPost.png';
import Portfolio_img from './Portfolio_me_img.png'
import code_img2 from './coding_img2.png';
import code_img3 from './coding_img3.png';
import code_img4 from './coding_img4.png';
import code_img5 from './coding_img5.png';
import code_img6 from './code_img6.png';
import code_img7 from './coding_img7.png';
import language_img1 from './c_logo.png';
import language_img2 from './java_logo.png';
import language_img3 from './java_script_logo.png';
import language_img4 from './react_logo.png';
import language_img5 from './tailwid_logo.png';
import language_img6 from './css_logo.png';
import language_img7 from './code_img8.png';
import language_img8 from './code_img9.png';
import language_img9 from './netlify.png';
import language_img10 from './vite_js.png';
import language_img11 from './mysql-img.png';
import language_img12 from './cpp_logo.png';
import github_img1 from './github_logo.png';
import react_img from './react.webp';
import github_img from './github.webp';
import monogo_db from './mongo-db.webp';
import tailwind_img from './tailwind.webp';
import node_img from './nodejs.webp';
import git_img from './git_logo.png';
import mongoDB from './mongoDB.png';
import Java_img from './Java1_certificate.png'
import JavaDSA_img from './Java2_certificate.png'
import WebDev_img from './Web_certificate.png'
import Cpp_img from './Cpp_certificate.png'



export const assets = {
  Portfolio_img,
  code_img2,
  code_img3,
  code_img4,
  code_img5,
  code_img6,
  code_img7,
  react_img,
  github_img,
  monogo_db,
  tailwind_img,
  git_img,
  node_img,
  language_img1,
  language_img2,
  language_img3,
  language_img4,
  language_img5,
  language_img6,
  language_img7,
  language_img8,
  language_img9,
  language_img10,
  language_img11,
  language_img12,
  github_img1,
  mongoDB,
  Java_img,
  JavaDSA_img,
  Cpp_img,
  WebDev_img
};

// Tech icons mapping with actual image imports
export const techIcons = {
  'react': language_img4,
  'tailwind': language_img5,
  'javascript': language_img3,
  'css': language_img6,
  'html': code_img6,
  'nodejs': node_img,
  'mongodb': mongoDB,
  'mysql': language_img11,
  'git': git_img,
  'github': github_img,
  'java': language_img2,
  'c++': language_img12,
  'python': code_img7,
  'bootstrap': language_img7,
  'netlify': language_img9,
  'vite': language_img10
};

export const skillData = [
  {
    category: "programming",
    skills: [
      { logo: techIcons.java, title: "Java" },
      { logo: techIcons['c++'], title: "C++" },
      { logo: techIcons.javascript, title: "JavaScript" },
      { logo: techIcons.css, title: "CSS" },
      { logo: techIcons.html, title: "HTML" },
      { logo: techIcons.python, title: "Python" },
    ],
  },
  {
    category: "frameworks",
    skills: [
      { logo: techIcons.react, title: "React" },
      { logo: techIcons.tailwind, title: "Tailwind CSS" },
      { logo: techIcons.bootstrap, title: "Bootstrap" },
    ],
  },
  {
    category: "tools",
    skills: [
      { logo: techIcons.mongodb, title: "MongoDB" },
      { logo: techIcons.git, title: "Git" },
      { logo: techIcons.github, title: "GitHub" },
      { logo: language_img8, title: "Gitlab" },
      { logo: techIcons.netlify, title: "Netlify" },
      { logo: techIcons.vite, title: "ViteJS" },
      { logo: techIcons.mysql, title: "MySQL" },
      { logo: techIcons.api, title: "API" },
    ],
  },
];

export const projectsData = [
  {
    title: "Web Development Full Stack",
    // src: "https://pwskills.com/learn/certificate/0ccd5dac-79ec-40ef-9f7c-0b92f71976a5/",
    image: WebDev_img
  },
  {
    title: "Java",
    // src: "https://drive.google.com/file/d/1_k43ygGRi9G329K2MR4FAgiAoAzyYG8J/view?usp=sharing",
    image: Java_img
  },
  {
    title: "Java + DSA",
    // src: "https://smartinternz.com/internships/salesforce_certificates/9084c6f938aedee18e63af5c2167ecab",
    image: JavaDSA_img
  },
  {
    title: "C++",
    // src: "https://drive.google.com/file/d/1eHpe-wX2eNs8V_JNDQdXtK2SRvF82FC_/view?usp=sharing",
    image: Cpp_img
  },
];

export const projectData = [
  {
    name: "Get&Post AI-Powered JobPortal",
    title: "Tech Stack",
    techStack: ['react', 'tailwind', 'nodejs', 'mongodb'],
    image: JobPortal,
    github: github_img,
    github_src: "https://github.com/Praphull2005/JobPortal_w_Chatbot",
    link_src: "https://jobportal-w-chatbot.onrender.com",
    text: "An AI-powered job portal with smart search and recommendation features using React and Node.js",
  },
  {
    name: "Voting Backend App",
    title: "Tech Stack",
    techStack: ['nodejs', 'mongodb'],
    image: votingApp_img,
    github: github_img,
    github_src: "https://github.com/Praphull2005/Voting_app",
    link_src: "https://github.com/Praphull2005/Voting_app",
    text: "Developed a secure backend for online voting system, handling user authentication, voting logic, and data storage efficiently",
  },
  {
    name: "Portfolio",
    title: "Tech Stack",
    techStack: ['react', 'tailwind', 'javascript'],
    image: Portfolio_img,
    github: github_img,
    github_src: "https://github.com/Praphull2005/Portfolio_PR",
    link_src: "praphull-rahangdale.netlify.app",
    text: "Responsive portfolio website showcasing projects, skills and experience with animations",
  },
  {
    name: "Animated Website",
    title: "Tech Stack",
    techStack: ['html', 'css', 'javascript'],
    image: animatedWeb_img,
    github: github_img,
    github_src: "https://github.com/Praphull2005/Animated_website",
    link_src: "https://6751d9e97780b631f856ddfe--teal-dolphin-d96c33.netlify.app/",
    text: "A visually engaging website showcasing smooth animations and responsive design.Built using HTML, CSS, and JavaScript to demonstrate frontend interactivity.",
  },

 

];