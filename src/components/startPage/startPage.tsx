import { useState } from "react";
import { Maindiv,Div,Button } from "./startPageStyle";
import waldo from '../assets/characters/waldo.jpg'
import wizard from '../assets/characters/wizard.jpg'
import odlaw from '../assets/characters/odlaw.jpg'

interface propsInterface {
    startTimer(): void
}

const Start =({startTimer}:propsInterface)=>{
    let [visible,SetVisible] = useState<boolean>(true);
    const handleClick =()=>{
        SetVisible(false);
        startTimer();
    }
    return(
        <Div show={visible}>

            <Maindiv>
            <div className="imgs">
            <div className="card"  >
                <img src={waldo} alt='waldo' />
                <p>waldo</p>
            </div>
            <div className="card"  >
                <img src={wizard} alt='wizard' />
                <p>wizard</p>
            </div>
            <div className="card"  >
                <img src={odlaw} alt='odlaw' />
                <p>odlaw</p>
            </div>
            </div>
                <h2>where is waldo ?</h2>
                <p>Find waldo and his friends</p>
                <p>Click start button to start the game</p>
                <Button onClick={handleClick}>start</Button>
            </Maindiv>
        </Div>
    );
}

export default Start;