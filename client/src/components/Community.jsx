import React from "react";
import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";

const Community = () => {
  return (
    <div className="community">
      <h2>Join the Puff Team </h2>
      <h3> Hack Like There's No Tomorrow!</h3>

      <div className="social-icons">
        <a
          href="https://github.com/puffadders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://t.me/puffadders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://discord.com/invite/KgygxrfGNH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.linkedin.com/company/puffadders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Community;
