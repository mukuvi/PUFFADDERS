import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaLock, FaDatabase, FaCode } from "react-icons/fa";

const services = [
  {
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with advanced security measures.",
    icon: <FaLock size={100} />,
  },
  {
    title: "Data Science",
    description:
      "Transforming data into actionable insights using statistical analysis.",
    icon: <FaDatabase size={100} />,
  },
  {
    title: "Software Development",
    description: "Building robust applications tailored to your needs.",
    icon: <FaCode size={100} />,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const options = {
      strings: ["Welcome to the Puffadders Community!"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };
    new Typed(".typed", options);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <h1 className="typed"></h1>
      <div className="team-pages">
        {services.map((service, index) => (
          <div
            key={index}
            className={`team-card ${currentIndex === index ? "active" : ""}`}
            style={{ display: currentIndex === index ? "block" : "none" }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
