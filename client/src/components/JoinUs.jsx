import React from "react";

const JoinUs = () => {
  return (
    <div className="join-us-container">
      <h2 className="join-us-title">Join Us</h2>
      <p className="join-us-description">
        We are the best community for aspiring professionals! Join us to
        collaborate, learn, and grow together in an inclusive and innovative
        environment.
      </p>

      <div className="join-us-fields">
        <div className="join-us-field">
          <h3 className="field-title">Cybersecurity</h3>
          <p className="field-description">
            Protecting systems, networks, and programs from digital attacks.
          </p>
          <a
            className="field-link"
            href="https://github.com/orgs/puffadders/teams/cybersecurity-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="join-us-field">
          <h3 className="field-title">Software Development</h3>
          <p className="field-description">
            Designing, coding, and maintaining software applications.
          </p>
          <a
            className="field-link"
            href="https://github.com/orgs/puffadders/teams/software-development-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="join-us-field">
          <h3 className="field-title">Data Science</h3>
          <p className="field-description">
            Analyzing and interpreting complex data to help inform
            decision-making.
          </p>
          <a
            className="field-link"
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
