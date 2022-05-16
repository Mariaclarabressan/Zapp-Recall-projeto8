import React from "react";
import logo from './assets/logo.png';

export default function HomeScreen({goToCards}){
    return(
        <div className = "Home-Screen">
            <figure>
                <img src={logo}></img>
            </figure>
            <div className = "title">ZapRecall</div>
            <button className="start-game" onClick = {()=> goToCards()}>Iniciar Recall</button>

        </div>
    )
}