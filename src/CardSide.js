import React from "react";
import StatusAnswer from "./StatusAnswer";


export default function CardSide (props){
    const [frontCard , setFrontCard] = React.useState(props.cardSide)

    function changeCard(){
        setFrontCard("back");
    }

    function changeSideCard (cardResults){
        setFrontCard("front");
        props.changeCard(cardResults);
    }

    if(frontCard = "front"){
        return(
            <div data-identifier = "OptionsCards" className = "card">
                <header data-identifier = "contador" className = "topo">
                    {props.cardNumber + 1} / {props.totalCards}
                </header>
                <article className = "front-card">
                    <span>{props.pergunta}</span>
                </article>
                <footer className = "topo">
                    <ion-icon name = "ion-ios-play-outline" />
                    onClick = {() => changeCard}
                </footer>
            </div>
        )
    }else if (frontCard == "back"){
        return(
            <>
            <StatusAnswer 
            question = {props.question}
            resposta = {props.resposta}
            totalCards = {props.totalCards}
            changeSideCard = {changeSideCard}
            cardNumber = {props.cardNumber}
            changeCard = {props.changeCard}
            goToCards = {props.goToCards}
            />            
            </>
            
        )
    }

}