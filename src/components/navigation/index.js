import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About me
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#Projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#ContactMe"
            onClick={() => handlePageChange("ContactMe")}
            className={
              currentPage === "ContactMe" ? "nav-link active" : "nav-link"
            }
          >
            Contact me
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#CV"
            onClick={() => handlePageChange("CV")}
            className={currentPage === "CV" ? "nav-link active" : "nav-link"}
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
