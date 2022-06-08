import React, { useEffect, useState } from "react";
import gameBoard from '../assets/whereswaldo3.jpg';
import { Main } from './gameBoardStyle'
import Tagger from "../tagger/tagger";
import {getfirestoreCoord} from '../backend/backend'

interface propsgame{
    getCaughtchar(isCaught: boolean): void;
}
interface fetchCoordinateInterface {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }

const GameBoard=({getCaughtchar}:propsgame)=>{

    const [coord,setcoord] = useState({x:0,y:0});
    const [char,setchar] = useState({
        waldo:false,
        wizard:false,
        odlaw:false,
    });

    const updateChar =(obj:any)=>{
        setchar({...char, ...obj});
    };
    useEffect(()=>{
        },[coord])

    useEffect(()=>{
        if(Object.values(char).every((char)=>char)){
            getCaughtchar(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[char]);

    const handleClick=async(e: React.MouseEvent<HTMLLIElement>)=>{


        const {x,y} = coord;
        const charName = e.currentTarget.innerHTML.toLowerCase( );
        // console.log(charName);
        const fetchcoords:fetchCoordinateInterface | any =  await getfirestoreCoord(charName);

        let {x1,x2,y1,y2} = fetchcoords;
        // console.log(x1,x2,y1,y2)
        if(x > x1 && y > y1){
            if( x <= x2 && y <= y2){
                alert(`you found ${charName}`)
                updateChar({[charName]:'true'});
            }
            else
            {
                alert(`too close but thats not ${charName}`);
            }
        }
        else{
            alert(`thats not ${charName} ` )
        }
        setcoord({ x: 0, y: 0 });

    }
    const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
        const x = (e.nativeEvent.offsetX);
        const y = (e.nativeEvent.offsetY);
        setcoord({x,y})

    }
return(
    <Main>
        <img src={gameBoard} alt="gameboard" onClick={getCoordinates} />
        <Tagger char={char} coordrinate={coord} handleClick={handleClick}/>
    </Main>
)
}
export default GameBoard;