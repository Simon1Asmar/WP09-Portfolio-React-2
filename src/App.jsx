import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./components/Animations.css"

// Importing Components
import Header from './components/Header'
import PageSection from './components/PageSection'
import BackgroundImg from './components/BackgroundImg'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import AboutMe from './components/AboutMe'
import CardsContainer from './components/CardsContainer'
import ProjectCard from './components/ProjectCard'

// Importing Icons
import { BsGithub } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// Importing Images
import ProfilePic from "./assets/images/ProfilePic.jpg"
import proj2Pic from "./assets/images/farah-ar.webp"

function App() {
  const [count, setCount] = useState(0)

  const aboutMe = {
    name:"Simon George Asmar",
    paragraph: "a passionate Unity developer and full-stack web enthusiast dedicated to bringing digital ideas to life. With a background in both 3D and 2D game development, I thrive on crafting immersive experiences that captivate audiences. From navigating virtual realities in AR and VR to creating dynamic and interactive web solutions, I merge creativity with code to build worlds of endless possibilities.",
    skills: ["Self Learning", "Unity", "Full Stack Web Development"],
    interests: ["Learning", "Traveling", "Watching Movies", "Games", "Music", "Reading"],
  }

  const projects = [
    {
      title: "Woodlands",
      description: "a 2D platformer game made with Unity.",
      link: "https://simon1asmar.itch.io/woodlands",
      imageLink: "https://img.itch.zone/aW1nLzkwMzY3NjUucG5n/315x250%23c/xHN0v%2F.png"
    },
    {
      title: "Farah AR: Color, Play, and Learn",
      description: "An AR coloring book companion application that teaches children about child's rights, I made while working at Intertech.",
      link: "https://apps.apple.com/sa/app/%D9%84%D9%88%D9%86-%D9%88%D8%A7%D9%84%D8%B9%D8%A8-%D9%88%D8%AA%D8%B9%D9%84%D9%85/id6457362014?l=en&platform=iphone",
      imageLink: proj2Pic,
    },
    {
      title: "Minecraft 2D",
      description: "Appleseeds Full Stack Course Weekend Project.",
      link: "https://exquisite-profiterole-c8d1bd.netlify.app/",
      imageLink: "https://wholesgame.com/wp-content/uploads/Minecraft-wallpaper.jpg"
    
    },
  ];

  return (
    <>
    <BackgroundImg/>
      {/* Header (Nav bar) [Responsive for different screen sizes]*/}
      <Header>
        <a href="#">Simon G. Asmar</a>
        <ul>
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </Header>
      {/* Section[hero]: welcome message or tagline + background image*/}
      {/* <PageSection className="header-margin" id="hero-section"> */}
      <PageSection id="hero-section">
        <HeroSection tagline="From engaging 3D and 2D video games to immersive AR/VR adventures and dynamic web solutions, welcome to my world of endless possibilities."/>
      </PageSection>
      {/* Section[about]: info about me, skills and interests + (optional: add timeline of your journey) */}
      <PageSection id="about-section" title="About Me">
        <AboutMe name={aboutMe.name} paragraph={aboutMe.paragraph} profilePic={ProfilePic} interests={aboutMe.interests} skills={aboutMe.skills}>
        <h3>
          <a href="https://www.github.com/simon1asmar" target='_blank'><BsGithub/></a>
          &nbsp;<a href="https://stackoverflow.com/users/15034649/simongasmar" target='_blank'><FaStackOverflow/></a>
          &nbsp;<a href="https://g.dev/Simon1Asmar" target='_blank'><FaGoogle/></a>
        </h3>
        </AboutMe>
      </PageSection>
      {/* Section[projects]: at least 3 Cards (title, description, link) */}
      <PageSection id="projects-section" title="Projects I've Worked On">
        <CardsContainer>
          {projects.map((project) => (
            <ProjectCard title={project.title} description={project.description} imageLink={project.imageLink} link={project.link}/>
          ))}
        </CardsContainer>
      </PageSection>
      {/* Contact-us form */}
      <PageSection id="contact-section" title="Contact Me">
        <ContactForm/>
      </PageSection>
      {/* Footer: name and copyright + social media links */}
      <Footer name="Simon George Asmar" copyrightYear="2023">
        <p>
          <a href="https://www.github.com/simon1asmar" target='_blank'><BsGithub/></a>
          &nbsp;<a href="https://stackoverflow.com/users/15034649/simongasmar" target='_blank'><FaStackOverflow/></a>
          &nbsp;<a href="https://g.dev/Simon1Asmar" target='_blank'><FaGoogle/></a>
        </p>
      </Footer>
    </>
  )
}

export default App
