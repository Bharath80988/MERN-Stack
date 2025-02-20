import React from "react";
import { useState, useMemo } from "react";
function doublingUpNumber(num){
    return num*2 ;
}
const UseMemo = () => {
    var [number, setNumber] = useState(0);
    var [theme,setTheme] = useState(false);
    var styling = {
        backgroundColor : theme ? "black" : "white",
        color : theme? "white" :"black",
    }
    var slowFunction = (num)=>{
        for(var i=0;i<100000000;i++){}
        return num*2
    }
    var doublingUpANumber = useMemo(()=>{
        return slowFunction(number)
    },[number])
    return (
        <>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <div style={styling}>
        <h1>This is use memo example</h1>
        Number Box : {""}
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        <h2>The number is : {number}</h2>
        <h2>The number is : {doublingUpANumber}</h2>
        </div>
        </>
    );
};

export default UseMemo;