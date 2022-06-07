import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from './components/header/header';
import Start from './components/startPage/startPage'
import GameBoard from './components/gameBoard/gameBoard';
import GetName from './components/getName/getName';

const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function App() {
  const [timer,setTimer] = useState<boolean>(false);
  const [sec,setSec] = useState<number>(0);
  const [min,setMin] = useState<number>(0);
  const [caught,setCaught] = useState<boolean>(false);
  const [askName,setAskName] = useState<boolean>(false);
  useEffect(()=>{
    if(!timer){
      return;
    }
    const time = setInterval(()=>{
      setSec((prevSec) => prevSec + 1)
    },1000);

    return () =>{
      clearInterval(time);
    };
  },[timer]);

  useEffect(()=>{
    if(sec === 60){
      setMin((prevMin) => prevMin+1);
      setSec(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[min,sec]);
  const startTimer =()=>{
    setTimer(true);
  }

  useEffect(()=>{
    if(caught){
      setTimer(false);
      setAskName(true)
    }
  },[caught])

  const getCaughtchar = (isCaught:boolean): void =>{
    setCaught(isCaught);
  };
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Head sec={sec} min={min}/>
      <Start startTimer = {startTimer}/>
      <GameBoard getCaughtchar={getCaughtchar}/>
      <GetName askName={askName} sec={sec} min={min}/>
    </div>
  );
}

export default App;
