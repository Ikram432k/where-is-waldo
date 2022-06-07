import React, { useEffect, useState } from "react";
import { addPlayers, getPlayer } from '../backend/backend';
import { Div,Form } from './getNameStyle';
import { Score } from './scoreBoardStyle'

interface getnameprops{
    sec:number;
    min:number;
    askName:boolean;
}
const GetName =({askName,sec,min}:getnameprops)=>{

    const [name,setName] = useState<string>('');
    const [hide,setHide] = useState<boolean>(false)

    const [scores,setScores] = useState<any>([])

useEffect(()=>{
    getScoreList();

},[]);


const getScoreList = async() =>{
    const data = await getPlayer();
    data.sort((a,b)=> a.totalTime - b.totalTime);
    setScores([...data])

}

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setName(e.target.value);
    }
    const handleSubmit = (e:any):void =>{
        e.preventDefault();
        const totalTime = min * 60 + sec;
        if(name){
            addPlayers(name,min,sec,totalTime);
            setHide(true);
        }
        getScoreList();
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
        <Score hide={hide}>
            <h1>ScoreBoard</h1>
                <ul>
                 <li className='tableHead'>
                    <span>position</span>
                    <span>name</span>
                    <span>duration</span>
                </li>
                {scores.map((obj:any,i:number)=>{
                return(
                <li key={i} className='tableBody'>
                    <span>{`${i+1}`}</span>
                    <span>{obj.name}</span>
                    <span>{String(obj.min).padStart(2,'0')}:{String(obj.sec).padStart(2,'0')}</span>
                </li>
                )
                })}
                </ul>
        </Score>
    </Div>
    )
}
export default GetName;