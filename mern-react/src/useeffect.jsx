import { useState } from "react";

const useEffect(() => {
    var {text,settext}=useState("");
    useEffect(()=>{
        console.log(text)
    })

  return () => {
    
  }
}, [third])
