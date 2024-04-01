// Footer.jsx
import React from "react";
import footerImage from "./assets/githubIcon.png";
const Footer = () => {
  return (
    <footer>
      <p>This is the footer of your app.</p>
      <img src={footerImage} alt="Footer Image" />
    </footer>
  );
};

export default Footer;
