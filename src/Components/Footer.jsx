// Footer.jsx
import React from "react";
import footerImage from "../assets/githubIcon.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerItems">
        <div className="githubLogo">
          <img src={footerImage} alt="Footer Image" className="footerImage" />
        </div>
        <div className="githubLink">
          Check our GitHub Page here !{" "}
          <a href="https://github.com/Folgad0/ReactToDoApp">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
