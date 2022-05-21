import React from "react";
import cv from "../../assets/CV.pdf";

const CV = () => {
  return (
    <section>
      <h2>My Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Handlebars.js</li>
        <li>React</li>
        <li>SQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
      <p>
        Curriculum vitae available <a href={cv}>here</a>
      </p>
    </section>
  );
};

export default CV;
