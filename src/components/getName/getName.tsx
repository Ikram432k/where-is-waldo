import React, { useState } from "react";
import { addPlayers } from '../backend/backend';
import { Div,Form } from './getNameStyle';
import ScoreBoard from '../scoreBoard/scoreBoard';

interface getnameprops{
    sec:number;
    min:number;
    askName:boolean;
}
const GetName =({askName,sec,min}:getnameprops)=>{

    const [name,setName] = useState<string>('');
    const [hide,setHide] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setName(e.target.value);
    }
    const handleSubmit = (e:any):void =>{
        e.preventDefault();
        const totalTime = min * 60 + sec;
        if(name){
            addPlayers(name,min,sec,totalTime);
            setHide(true);
            console.log(totalTime);
        }
    }
    return(
        <Div visible={askName}>
        <Form onSubmit={handleSubmit} hide={hide}>
            <p>Congratulations !</p>
            <p>you finished the game in  {String(min).padStart(2, '0')}:{String(sec).padStart(2, '0')}</p>
            <h3>enter your name and check the leaderboard</h3>
            <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            />
            <button>Enter</button>
        </Form>
        <ScoreBoard hide={hide}/>
        </Div>
    )
}
export default GetName;