import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <a href="#about me">
          <li>About me</li>
        </a>
        <a href="#my work">
          <li>My work</li>
        </a>
        <a href="./assets/CV.pdf">
          <li>My CV</li>
        </a>
        <a href="#contact me">
          <li>Contact me</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;

//logic for mounting components needs to go here?
