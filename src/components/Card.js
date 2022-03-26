import React from "react";
import star from "../images/star.svg"
import "../style.css"
export default function Card(card){
    console.log(card)
    return(
        <div className="card">
            <img src={`../images/${card.img}`} alt="card image" className="card-image"></img>
            <div className="card-stats">
                <img src={star} alt="star image"></img>
                <p>{card.rate}</p>
                <p>({card.votes}) {card.country}</p>
            </div>
            <p className="card-info">{card.info}</p>
            <p className="card-info"><span className="bold">From ${card.price}</span> /person </p> 
        </div>
    );
}
