import React from "react";

const projects = [
  {
    title: "Creator Labs",
    image: "./assets/creator-labs.png",
    imageAlt: "screenshot of landing page",
    deployed: "https://creativelabs-app.herokuapp.com/",
    repo: "https://github.com/BavKudhail/creative-labs",
  },
  {
    title: "Tech Blog",
    image: "./assets/tech-blog.png",
    imageAlt: "screenshot of tech blog home page",
    deployed: "https://tech-blog-empipio.herokuapp.com/",
    repo: "https://github.com/empipio/Tech-Blog",
  },
  {
    title: "Social Network API",
    image: "./assets/social-network.png",
    imageAlt: "screenshot of routes being tested in insomnia",
    deployed: "https://youtu.be/-Q2J_o1YgoQ",
    repo: "https://github.com/empipio/Social-Network-API",
  },
  {
    title: "Text Editor",
    image: "./assets/text-editor/png",
    imageAlt: "screenshot of text editor deployed to heroku",
    deployed: "https://empipio-text-editor.herokuapp.com/",
    repo: "https://github.com/empipio/Text-Editor",
  },
  {
    title: "Junior Dev Hub",
    image: "./assets/devhub.png",
    imageAlt: "screenshot of landing page",
    deployed: "https://languagebytes.github.io/Junior-Dev-Job-Search-Engine/",
    repo: "https://github.com/LanguageBytes/Junior-Dev-Job-Search-Engine",
  },
  {
    title: "Weather Dashboard",
    image: "./assets/weather-screenshot.png",
    imageAlt: "screenshot showing weather in Manchester",
    deployed: "https://empipio.github.io/h6-weather-dashboard/",
    repo: "https://github.com/empipio/h6-weather-dashboard",
  },
];

const Project = () => {
  return (
    <div>
      <h2>My Work</h2>
      {projects &&
        projects.map((project) => (
          <div>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.imageAlt} />
            <p>
              Deployed app or walkthrough video available
              <a href={project.deployed}>here</a>
            </p>
            <p>
              Repo available <a href={project.repo}>here</a>
            </p>
          </div>
        ))}

      {/* card here to display projects */}
    </div>
  );
};

export default Project;
