import { useState } from "react";
import "./App.css";

import "./components/Animations.css";

// Importing Components
import Header from "./components/Header";
import PageSection from "./components/PageSection";
import BackgroundImg from "./components/BackgroundImg";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import CardsContainer from "./components/CardsContainer";
import ProjectCard from "./components/ProjectCard";

// Importing Icons
import { BsGithub } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// Importing Images
import ProfilePic from "./assets/images/ProfilePic.jpg";
import proj2Pic from "./assets/images/farah-ar.webp";

function App() {
  //states
  const [currentActivePage, setCurrentActivePage] = useState("hero");

  const aboutMe = {
    name: "Simon George Asmar",
    paragraph:
      "a passionate Unity developer and full-stack web enthusiast dedicated to bringing digital ideas to life. With a background in both 3D and 2D game development, I thrive on crafting immersive experiences that captivate audiences. From navigating virtual realities in AR and VR to creating dynamic and interactive web solutions, I merge creativity with code to build worlds of endless possibilities.",
    skills: ["Self Learning", "Unity", "Full Stack Web Development"],
    interests: [
      "Learning",
      "Traveling",
      "Watching Movies",
      "Games",
      "Music",
      "Reading",
    ],
  };

  const projects = [
    {
      title: "Woodlands",
      description: "a 2D platformer game made with Unity.",
      link: "https://simon1asmar.itch.io/woodlands",
      imageLink:
        "https://img.itch.zone/aW1nLzkwMzY3NjUucG5n/315x250%23c/xHN0v%2F.png",
    },
    {
      title: "Farah AR: Color, Play, and Learn",
      description:
        "An AR coloring book companion application that teaches children about child's rights, I made while working at Intertech.",
      link: "https://apps.apple.com/sa/app/%D9%84%D9%88%D9%86-%D9%88%D8%A7%D9%84%D8%B9%D8%A8-%D9%88%D8%AA%D8%B9%D9%84%D9%85/id6457362014?l=en&platform=iphone",
      imageLink: proj2Pic,
    },
    {
      title: "Minecraft 2D",
      description: "Appleseeds Full Stack Course Weekend Project.",
      link: "https://exquisite-profiterole-c8d1bd.netlify.app/",
      imageLink:
        "https://wholesgame.com/wp-content/uploads/Minecraft-wallpaper.jpg",
    },
  ];

  const pageSectionHero = () => {
    return (
      <PageSection id="hero-section">
        <HeroSection tagline="From engaging 3D and 2D video games to immersive AR/VR adventures and dynamic web solutions, welcome to my world of endless possibilities." />
      </PageSection>
    );
  };

  const pageSectionAbout = () => {
    return (
      <PageSection id="about-section" title="About Me">
        <AboutMe
          name={aboutMe.name}
          paragraph={aboutMe.paragraph}
          profilePic={ProfilePic}
          interests={aboutMe.interests}
          skills={aboutMe.skills}
        >
          <h3>
            <a href="https://www.github.com/simon1asmar" target="_blank">
              <BsGithub />
            </a>
            &nbsp;
            <a
              href="https://stackoverflow.com/users/15034649/simongasmar"
              target="_blank"
            >
              <FaStackOverflow />
            </a>
            &nbsp;
            <a href="https://g.dev/Simon1Asmar" target="_blank">
              <FaGoogle />
            </a>
          </h3>
        </AboutMe>
      </PageSection>
    );
  };

  const pageSectionProjects = () => {
    return (
      <PageSection id="projects-section" title="Projects I've Worked On">
        <CardsContainer>
          {projects.map((project, key) => (
            <ProjectCard
              key={key} //this part prevents me from getting the Warning: Each child in a list should have a unique "key" prop.
              title={project.title}
              description={project.description}
              imageLink={project.imageLink}
              link={project.link}
            />
          ))}
        </CardsContainer>
      </PageSection>
    );
  };

  const pageSectionContact = () => {
    return (
      <PageSection id="contact-section" title="Contact Me">
        <ContactForm />
      </PageSection>
    );
  };

  const changeCurrentActivePage = (event) => {
    setCurrentActivePage(event.target.classList[0]);
  };

  return (
    <>
      <BackgroundImg />
      {/* Header (Nav bar) [Responsive for different screen sizes]*/}
      <Header>
        <a href="#" onClick={changeCurrentActivePage} className="hero">Simon G. Asmar</a>
        <ul>
          <li>
            <a
              href="#hero-section"
              onClick={changeCurrentActivePage}
              className="hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              onClick={changeCurrentActivePage}
              className="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              onClick={changeCurrentActivePage}
              className="projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={changeCurrentActivePage}
              className="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </Header>

      {/* Section[hero]: welcome message or tagline + background image*/}
      {currentActivePage === "hero" && pageSectionHero()}

      {/* {pageSectionHero()}; */}
      {currentActivePage === "about" && pageSectionAbout()}

      {/* Section[projects]: at least 3 Cards (title, description, link) */}
      {currentActivePage === "projects" && pageSectionProjects()}

      {/* Contact-us form */}
      {currentActivePage === "contact" && pageSectionContact()}

      {/* Footer: name and copyright + social media links */}
      <Footer name="Simon George Asmar" copyrightYear="2023">
        <p>
          <a href="https://www.github.com/simon1asmar" target="_blank">
            <BsGithub />
          </a>
          &nbsp;
          <a
            href="https://stackoverflow.com/users/15034649/simongasmar"
            target="_blank"
          >
            <FaStackOverflow />
          </a>
          &nbsp;
          <a href="https://g.dev/Simon1Asmar" target="_blank">
            <FaGoogle />
          </a>
        </p>
      </Footer>
    </>
  );
}

export default App;
