export default function Results (props){
    let fails = 0;

    for (let i = 0; i < props.cardResults.length; i++){
        if(props.cardResults [i] === "fail"){
            fails ++;
        }
    }
    if (fails === 0){
        return (
            <div className = "resultados">
                <p>Você acertou tudo!Parabéns</p>
            </div>
        );
    }else {
        return (
            <div class Name = "resultados">
            <p>Você não acertou alguns, você errou no total {fails} cards</p>
        </div>
        );
        
    }
}