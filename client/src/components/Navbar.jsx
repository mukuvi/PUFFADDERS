import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../images/puffadder.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </Link>
      <HamburgerMenu />
      <ul>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">
              Join Us
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <Link to="/joinus/cybersecurity">Cybersecurity</Link>
                <Link to="/joinus/software-development">
                  Software Development
                </Link>
                <Link to="/joinus/data-science">Data Science</Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
