import React from "react";
import{ Div } from './headerStyle'

interface propstime{
    sec:number;
    min:number;
}

function Head({sec,min}:propstime){
return(
    <Div>
        <h1>where is wally ?</h1>
        <p>{String(min).padStart(2,'0')}:{String(sec).padStart(2,'0')}</p>
    </Div>
)
}
export default Head;