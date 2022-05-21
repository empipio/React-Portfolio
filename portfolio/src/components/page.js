import React, { useState } from "react";
import AboutMe from "./aboutMe";
import Contact from "./contactMe";
import CV from "./cv";
import Nav from "./navigation";
import Project from "./project";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Project />;
    }
    if (currentPage === "ContactMe") {
      return <Contact />;
    }
    return <CV />;
  };
  console.log(currentPage);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
