import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    c,
    cpp,
    java,
    spring,
    flask,
    python,
    flutter,
    selenium,
    firebase,
    dart,
    mysql,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Framework",
      icon: spring
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Selenium",
      icon: selenium
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Flutter",
      icon: flutter
    },
    {
      name: "Firebase",
      icon: firebase
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const projects = [
    {
      title: "NGO Link",
      tech: "Flutter, Firebase, Rowy, Python, JSON, Figma.",
      about: "This Project aims to help & aware people about NGO's, Companies CSR roles & their functionalities which it provides to help the needy ones. (Mobile App & WebApp)",
      links: "https://github.com/kushagra3204/NGO-Link-Flutter",
    },
    {
      title: "Secured Chat Application",
      tech: "HTML, CSS, JavaScript, Node.js, React.js, CryptoJS, Python, Flask, Firebase.",
      about: "An End-to-End Encrypted Chat Application with Intrusion Detection & Packet Sniffing which authenticates users and verifies them users can send messages to each another which is secured (SHA256+AES+Salting) and stores data in database (Firebase).",
      links: "https://github.com/kushagra3204/"
    },
    {
      title: "Billboard To Spotify",
      tech: "Python, Spotipy, Spotify API.",
      about: "An Application which ask user date or year of which he wants the top 100 famous songs listed on BillBoard & creates a playlist in spotify & automatically searches & stores user's favorite 100+ songs.",
      links: "https://github.com/kushagra3204/BillBoardToSpotify",
    },
    {
      title: "Musify",
      tech: "Java, XML, Firebase.",
      about: "An Android Music Player application using Java & XML which asks user to sign up/in & backend with google firebase & cloud which includes storage of user information & songs.",
      links: "https://github.com/kushagra3204/MusifyApp-Java-&roid",
    },
    {
      title: "Robust Human & Oclussion Detection",
      tech: "OpenCV, Tensorflow, MediaPipe, Python",
      about: "This Project aims to recognize specific anomalous human activities & track humans even when they are partially or fully occluded by objects or obstacles.",
      links: "https://github.com/kushagra3204/Robust-Human-and-Occlusion-Detection",
    }
  ];
  
  export { technologies, projects };