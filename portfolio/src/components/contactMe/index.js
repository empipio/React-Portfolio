import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <input type="text">name</input>
        <input type="email">email</input>
        <input type="text">message</input>
        <div>
          <button>Send message</button>
        </div>
      </form>
      ;
    </div>
  );
};
export default Contact;

//NEED TO INCLUDE VALIDATION TO CHECK EMAIL VALID AND ALL FIELDS FILLED OUT
