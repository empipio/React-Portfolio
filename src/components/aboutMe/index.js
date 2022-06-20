import React from "react";
import me from "../../assets/me.png";

const AboutMe = () => {
  return (
    <main id="about-me">
      <h2>About Me</h2>

      <section id="me">
        <img src={me} alt="pic of me with Jack the fox terrier" />
        <h3 id="name">Emily Mckibben</h3>
        <p>
          Welcome! I am a trainee developer living in Cheshire, UK. I spent
          seven years as a small animal veterinary surgeon before enrolling in
          the University of Birmingham's boot camp! In my spare time I enjoy
          yoga, reading and exploring the Peak District with my rescue dog,
          Jack.
        </p>
        <p>
          Feel free to reach out via email:{" "}
          <a href="emckibben@hotmail.co.uk">emckibben@hotmail.co.uk</a>
        </p>
      </section>
    </main>
  );
};

export default AboutMe;
