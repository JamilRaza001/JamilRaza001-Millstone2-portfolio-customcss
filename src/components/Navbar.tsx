import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="nav">
      <div className="logo">
        <h2>M.Jamil Raza Attari</h2>
      </div>
      <div className="NavLinks">
        <ul>
          <li>
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" href="/projects">Projects</Link>
          </li>
          <li>
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="NavBtn">
        <button className="CV-Btn">Download CV</button>
      </div>
    </header>
  );
};

export default Navbar;
