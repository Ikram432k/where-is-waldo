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
        console.log(coord);

        },[coord])
    



    // const getcoord =(charName: string)=>{

    //     const waldo = {
    //         char:"waldo",
    //         x1:1075,
    //         x2:1110,
    //         y1:580,
    //         y2:630
    //     }
    //     const wizard = {
    //         x1:1075,
    //         x2:1110,
    //         y1:580,
    //         y2:630
    //     }
    //     const outlaw = {
    //         x1:1075,
    //         x2:1110,
    //         y1:580,
    //         y2:630
    //     }
    //     if(charName === waldo.char){
    //         return waldo.x1,waldo.x2,waldo.y1,waldo.y2;
    //     }
    // }

    useEffect(()=>{
        if(Object.values(char).every((char)=>char)){
            getCaughtchar(true);
        }
    },[char]);

    const handleClick=async(e: React.MouseEvent<HTMLLIElement>)=>{


        const {x,y} = coord;
        const charName = e.currentTarget.innerHTML.toLowerCase( );
        console.log(charName);
        // const fetchcoords:fetchCoordinateInterface | any =  await getfirestoreCoord(charName);

        // let {x1,x2,y1,y2} = fetchcoords;
        // console.log(x1,x2,y1,y2)
        if(x > 1075 && y > 580){
            if( x <= 1110 && y <= 630){
                console.log('thats waldo')
                updateChar({[charName]:'true'});
            }
            else
            {
            console.log('too close but thats not waldo');
            }
        }
        else{
            console.log(`thats not waldo ` )
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