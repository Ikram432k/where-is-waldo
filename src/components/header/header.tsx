import React from "react";
import{ Div } from './headerStyle'
import { Button } from "../startPage/startPageStyle";

interface propstime{
    sec:number;
    min:number;
    restart:any;
}

function Head({sec,min,restart}:propstime){
return(
    <Div>
        <h1>where is wally ?</h1>
        <p>{String(min).padStart(2,'0')}:{String(sec).padStart(2,'0')}</p>
        <Button onClick={restart}>restart</Button>
    </Div>
)
}
export default Head;