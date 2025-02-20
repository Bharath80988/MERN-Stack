import { useState, useEffect, useMemo } from "react";


function doublingupanumber(num){
    return num*2
}

function slowFunction(num){
    for(var i=0;i<10;i++){
        return num+2
    }
}


const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  return (
    <>
    
      <div style={styling}>
      <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <h1>This is USEMEMO Example</h1>
        Number Box:{" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h2>The Number is {number}</h2>
        <h2>The doubling of the number {doublingupanumber(number)} </h2>
      </div>
    </>
  );
};

export default UseMemo;
