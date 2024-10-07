import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/puffadder.jpg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </Link>
      <ul>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/joinus">Join Us</Link>
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
