import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import HamburgerMenu from "./HamburgerMenu";
import logo from "../images/puffadder.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </NavLink>
      <HamburgerMenu />
      <ul>
        <li>
          <NavLink
            to="/community"
            activeClassName="active-link" // Add active class
            onClick={() => setDropdownOpen(false)} // Optional: close dropdown on link click
          >
            Community
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            activeClassName="active-link"
            onClick={() => setDropdownOpen(false)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/joinus"
            activeClassName="active-link"
            onClick={() => setDropdownOpen(false)}
          >
            Join Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            activeClassName="active-link"
            onClick={() => setDropdownOpen(false)}
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            activeClassName="active-link"
            onClick={() => setDropdownOpen(false)}
          >
            Donate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
