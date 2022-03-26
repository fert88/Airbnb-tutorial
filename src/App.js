import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "../src/style.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="cards">
      <Card
          img="card1.svg"
          rate="5"
          votes={6}
          country="USA"
          info="Life lessons with Katie Zaferes"
          price={136}
      />
      <Card
          img="card2.png"
          rate="5"
          votes={30}
          country="TR"
          info="Life lessons with Katie Zaferes"
          price={50}
      />
      <Card
          img="card3.png"
          rate="5"
          votes={150}
          country="tm"
          info="Life lessons with Katie Zaferes"
          price={25}
  />
      </div>    
    </div>
  );
}
export default App;
