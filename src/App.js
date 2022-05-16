import React from "react";
import Deck from "./Deck";
import HomeScreen from "./HomeScreen";

export default function App(){
    const [currentDisplay, setCurrentDisplay ] = React.useState(
        <HomeScreen goToCards = {goToCards}/>
    );
    
    function goToCards (){ 
        setCurrentDisplay(
           <Deck />
        )   
    }   
    
    return <>{currentDisplay} </> ;
}
