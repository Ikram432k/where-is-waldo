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
    console.log(scores);

},[]);

const getScoreList = async() =>{
    const data = await getPlayer();
    data.sort((a,b)=> a.totalTime - b.totalTime);
    setScores([...data])
}

return(
<Div hide={hide}>
    <h1>scoreBoard</h1>
</Div>
)
}
export default ScoreBoard;