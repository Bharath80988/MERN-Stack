import React from "react";
import { useState, useCallback } from "react";
function doublingUpNumber(num){
    return num*2 ;
}
const UseCallBack = () => {
    var [number, setNumber] = useState(0);
    var [theme,setTheme] = useState(false);
    var styling = {
        backgroundColor : theme ? "black" : "white",
        color : theme? "white" :"black",
    }
    
    var doublingUpANumber = () => {
        return number*2
    }

    var numList = useCallback((mul) => {
        return [number*mul*2,number*mul*4,number*mul*6]
    })
    return (
        <>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <div style={styling}>
        <h1>This is use callback example</h1>
        Number Box : {""}
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        {/* <h2>The number is : {number}</h2>
        <h2>The number is : {doublingUpANumber()}</h2> */}
        <h2>The numlist is :</h2>
        {numList(100).map((val,index)=>(
            <h2 key={index}>{val}</h2>
        ))}
        </div>
        </>
    );
};

export default UseCallBack;