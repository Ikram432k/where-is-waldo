import React, { useState } from "react";

interface getnameprops{
    sec:number;
    min:number;
}
const GetName =({sec,min}:getnameprops)=>{

    const [name,setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setName(e.target.value);
    }
    const handleSubmit = (e:any):void =>{
        e.preventDefault();
        const totalTime = min * 60 + sec;
        if(name){
            
        }
    }
    return(
        <div>
        <p>you finished the game in  {String(min).padStart(2, '0')}:{String(sec).padStart(2, '0')}</p>
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            />
            <button>Enter</button>
        </form>
        </div>
    )
}
export default GetName;