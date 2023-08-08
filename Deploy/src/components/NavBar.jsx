import React from "react";

const NavBar = ({
  handleHomeClick,
  handleAboutClick,
  handleSkillsClick,
  handleContactClick,
}) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={handleHomeClick}>Home</li>
        <li onClick={handleAboutClick}>About</li>
        <li onClick={handleSkillsClick}>Skills</li>
        <li onClick={handleContactClick}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
