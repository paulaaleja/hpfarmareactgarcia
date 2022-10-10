import React from "react";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
        <nav className="navbar">
          <div className="navbar__logo">
          <Link to="/">
             <img src='../logo.png'></img>
             </Link>
            
           
      
          </div>
          <ul className="navbar__ul">

          <Link to="/"><li>inicio</li></Link>
            <Link to="/category/Medicamentos"><li>medicamentos</li></Link>
            <Link to="/category/Perfumeria"><li>perfumeria</li></Link>
            <Link to="/category/Fragancias"><li>fragancias</li></Link>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    );
}



export default Navbar