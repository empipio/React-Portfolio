import React from "react";
import creatorLabs from "../../assets/creator-labs.png";
import techBlog from "../../assets/tech-blog.png";
import socialNetwork from "../../assets/social-network.png";
import textEditor from "../../assets/text-editor.png";
import devHub from "../../assets/devhub.png";
import weatherDashboard from "../../assets/weather-screenshot.png";

const projects = [
  {
    title: "Creator Labs",
    image: creatorLabs,
    imageAlt: "screenshot of landing page",
    deployed: "https://creativelabs-app.herokuapp.com/",
    repo: "https://github.com/BavKudhail/creative-labs",
  },
  {
    title: "Tech Blog",
    image: techBlog,
    imageAlt: "screenshot of tech blog home page",
    deployed: "https://tech-blog-empipio.herokuapp.com/",
    repo: "https://github.com/empipio/Tech-Blog",
  },
  {
    title: "Social Network API",
    image: socialNetwork,
    imageAlt: "screenshot of routes being tested in insomnia",
    deployed: "https://youtu.be/-Q2J_o1YgoQ",
    repo: "https://github.com/empipio/Social-Network-API",
  },
  {
    title: "Text Editor",
    image: textEditor,
    imageAlt: "screenshot of text editor deployed to heroku",
    deployed: "https://empipio-text-editor.herokuapp.com/",
    repo: "https://github.com/empipio/Text-Editor",
  },
  {
    title: "Junior Dev Hub",
    image: devHub,
    imageAlt: "screenshot of landing page",
    deployed: "https://languagebytes.github.io/Junior-Dev-Job-Search-Engine/",
    repo: "https://github.com/LanguageBytes/Junior-Dev-Job-Search-Engine",
  },
  {
    title: "Weather Dashboard",
    image: weatherDashboard,
    imageAlt: "screenshot showing weather in Manchester",
    deployed: "https://empipio.github.io/h6-weather-dashboard/",
    repo: "https://github.com/empipio/h6-weather-dashboard",
  },
];

const Project = () => {
  return (
    <div id="work">
      <span>
        <h2 id="project-header">Projects</h2>
      </span>

      {projects &&
        projects.map((project) => (
          <div class="card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.imageAlt} />
            <span>
              Deployed app or walkthrough video available
              <a href={project.deployed}> here</a>
            </span>

            <span>
              Repo available <a href={project.repo}>here</a>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Project;
