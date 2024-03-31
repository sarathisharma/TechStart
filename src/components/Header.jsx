import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <nav>
        <h1>techstart</h1>
        <main>
            <a href={"/#home1"}>Home</a>
            <Link to={"/contact"}>Contact</Link>
            <a href={"/#about"}>About</a>
            <a href={"/#brands"}>Brands</a>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  );
}

export default Header