import { useState } from "react";

function Number(){
    var staticnit=0;
    var [num,setNum]= useState(staticnit)
    
    return(
        <div>
            <h2>This contains UseState Operations</h2>
            <button onClick={()=>setNum(num-1)}>-</button><br />
            <h3>Current state: {num}</h3><br />
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    );
}
export default Number;