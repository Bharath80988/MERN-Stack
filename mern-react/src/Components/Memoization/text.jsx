import React from "react";
import { useState, useMemo } from "react";
function doublingUpNumber(num){
    return num*2 ;
}
const Text = () => {
    var [number, setNumber] = useState(0);
    var doublingUpANumber = useMemo(()=>{
        return number*2
    },[number])
    return (
        <>
        <div>
        <h1>This is use memo</h1>
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

export default Text;