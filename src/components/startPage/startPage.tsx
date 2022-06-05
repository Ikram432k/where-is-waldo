import { useState } from "react";
import { Div } from "./startPageStyle";

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
            <div>
                <h2>where is waldo ?</h2>
                <p>Find waldo and his friends</p>
                <p>Click start button to start the game</p>
                <button onClick={handleClick}>start</button>
            </div>
        </Div>
    );
}

export default Start;