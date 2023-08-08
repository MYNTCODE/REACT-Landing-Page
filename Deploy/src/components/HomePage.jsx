import React, { useRef } from "react";
import NavBar from "./NavBar";
import BackToTopButton from "./BackToTopButton";

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
        handleSkillsClick={handleSkillsClick}
        handleContactClick={handleContactClick}
      />
      <div className="homepage" ref={homeRef}>
        <h1 className="mint">Hello, I'm Mint</h1>
        <h1 className="myntcode">MYNTCODE</h1>

        <div>
          <p className="full-stack">Full Stack Developer </p>
          <a href="https://github.com/MYNTCODE/Calculator" target="_blank">
            <button className="Project">Previous Project</button>
          </a>
        </div>
      </div>
      <div ref={aboutRef}>
        <div className="about-section">
          <div className="img-and-details">
            <img
              className="profile-img"
              src="https://cdn.discordapp.com/attachments/895300373911314483/1133757883356549230/phonto.png"
            />
            <p className="about-me-detail">
              Hello, my name is Mint. Currently a full stack developer bootcamp
              student and working as a content creator. I'm interested in coding
              because it feels like creating something new and coding project
              can solving a problem for people.
            </p>
          </div>
        </div>
      </div>
      <div ref={skillsRef} className="skill-section">
        <div className="skill-topic">
          <h1>Skills & Experience</h1>
          <div className="logo-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt="HTML5"
              />
            </a>
            <a href="https://www.w3.org/TR/CSS/#css" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                alt="CSS3"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt="TailwindCSS"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                alt="JavaScript"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                alt="React"
              />
            </a>
          </div>
          <div className="certificate">
            <div className="google">
              <a
                href="https://coursera.org/share/84c9951d268c4565f71be83f2ba3c986"
                target="_blank"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/895300373911314483/1136536104141586442/500x500_Google.jpg"
                  alt="Data-analytics"
                />
              </a>
            </div>
            <div className="freecodecamp">
              <a
                href="https://www.freecodecamp.org/certification/MYNTCODE/responsive-web-design"
                target="_blank"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/895300373911314483/1136536681034559558/fcc_primary_small.jpg"
                  alt="freecodecamp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <div className="box-contact">
          <h1>Contact Me</h1>
          <div className="logo-contact">
            <a
              href="https://www.instagram.com/mynt_p/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1136555243753177118/instagram_1.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/myntp.asmr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1136555520728236062/facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              href="mailto:myntpwork@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1136554718106239056/email.png"
                alt="email"
              />
            </a>
            <a
              href="https://www.github.com/MYNTCODE"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://cdn.discordapp.com/attachments/895300373911314483/1136555012542185552/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <BackToTopButton />
      </div>
    </>
  );
};

export default HomePage;
