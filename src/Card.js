import React from "react";
import StatusAnswer from "./StatusAnswer";

export default function Card(props) {
    const { question, index } = props
    const [step, setStep] = React.useState("number-question")

    return (
        <>
            {step === "number-question" 
            ? <div className="unit-card" onClick={() => {setStep ("question") }} >
                <h3>{`Pergunta ${index + 1}`}</h3>
            </div>
            : step === "question"
            ? <p onClick = {() => setStep (null)}>{question.pergunta}</p>
                    
            : <StatusAnswer
                question = {question.pergunta}
                answer = {question.answer}
                numero = {index +1}
            />
            
            }
            
        </>
    )
}