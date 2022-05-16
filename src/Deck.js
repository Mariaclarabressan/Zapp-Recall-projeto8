import React from "react";
import Card from "./Card";
import logo from './assets/logo.png';


export default function Deck(props) {
    const questions = [
        {
            pergunta: "O que é JSX?",
            answer: "Uma extensão da linguagem do JavaScrpt"
        },

        {
            pergunta: "O React é ...",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },

        {
            pergunta: "Componentes devem iniciar com ...",
            answer: "letra maiuscula",
        },
        {
            pergunta: "Podemos colocar .... dentro do JSX",
            answer: "expressões",
        },
        {
            pergunta: "O ReactDOM nos ajuda ...",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            pergunta: "Usamos a npm para... ",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            pergunta: "Usamos props para ....",
            answer: "passar diferentes informações para componentes",
        },
        {
            pergunta: "Usamos estado (state) para ...",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        },
    ]


    const [cardResults, acumulateResults] = React.useState([]);

    return (
        <div class="deck-cards">
            <div className="topo">
                <figure>
                    <img src ={logo} ></img>
                </figure>
                <h1>ZapRecall</h1>
            </div>
            {questions.map((question, index) => <Card question={question} index={index} />)}
            <div className="footer">
                <h2>{cardResults.length}/{questions.length}</h2>
            </div>
        </div>
    )

}    