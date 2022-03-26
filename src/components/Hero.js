import React from "react";
import hero from "../images/hero.svg"
import "../style.css";
 function Hero(){
     return(
         <>
         <div className="hero">
             <img src={hero} alt="hero-image"></img>
         </div>
         <h1 className="hero hero-heading">Online Experiences</h1>
         <p className="hero hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
         </p>
         </>
         

     )
 }
 export default Hero;