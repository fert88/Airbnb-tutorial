import React from "react";
import logo from "../images/logo.svg"
import "../style.css"
function Navbar(){
    return(
        <nav>
            <img src={logo} alt="site logo"></img>
        </nav>
    )
}
export default Navbar;