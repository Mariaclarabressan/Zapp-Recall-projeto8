import React from "react";


export default function StatusAnswer (props){
    const[cardState, setCardState] = React.useState("card");
    const[currentState, setCurrentState] = React.useState("none");

    function showStatusCards (options){
        
        setCardState(null);
        setCurrentState(options);
    }

    if(cardState === "card"){
        return (
            <div>
                <div data-identifier = "OptionsCards" className = {cardState}>
                    <header data-identifier = "contador" className = "topo">
                        <span>{props.question}</span> 
                    </header>
                    <article class = "answer-cards">
                        <span>{props.answer}</span>
                    </article>
                    <footer className = "status-answers">
                        <button onClick = {() => showStatusCards("red") }>
                            Não lembrei
                        </button>
                        <button onClick = {() => showStatusCards("yellow") }>
                            Quase não lembrei
                        </button>
                        <button onClick = {() => showStatusCards("green") }>
                            Zap!
                        </button>
                    </footer>                    
                </div>
            </div>
        );

    }else{
        return(
            <div data-identifier = "OptionsCards" className= {cardState}>
                <header data-identifier = "contador" className = "topo">
                    <span>{props.question}</span> 
                </header>
                <article class = "card-verso">
                    <span>{props.answer}</span>
                </article>
                             
            </div>
        )
    }

}