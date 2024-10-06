import React from "react";

const JoinUs = () => {
  return (
    <div className="join-us">
      <h2>Join Us</h2>

      <div className="fields-container">
        <div className="field">
          <h3>Cybersecurity</h3>
          <p className="field-description">
            Protecting systems, networks, and programs from digital attacks.
          </p>
          <a
            href="https://github.com/orgs/puffadders/teams/cybersecurity-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="field">
          <h3>Software Development</h3>
          <p className="field-description">
            Designing, coding, and maintaining software applications.
          </p>
          <a
            href="https://github.com/orgs/puffadders/teams/software-development-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="field">
          <h3>Data Science</h3>
          <p className="field-description">
            Analyzing and interpreting complex data to help inform
            decision-making.
          </p>
          <a
            href="https://github.com/orgs/puffadders/teams/data-science-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
