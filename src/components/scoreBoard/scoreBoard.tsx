import { useEffect, useState } from 'react';
import { getPlayer } from '../backend/backend'
import { Div } from './scoreBoardStyle'

interface showscore{
    hide:boolean
}

const ScoreBoard =({hide}:showscore)=>{

const [scores,setScores] = useState<any>([])

useEffect(()=>{
    getScoreList();

},[]);

const getScoreList = async() =>{
    const data = await getPlayer();
    data.sort((a,b)=> a.totalTime - b.totalTime);
    setScores([...data])
    console.log(scores);

}

return(
<Div hide={hide}>
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
</Div>
)
}
export default ScoreBoard;