import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  var [text, setText] = useState("Hi");
  var previousrender = useRef();
  useEffect(() => {
    previousrender.current = text;
    console.log(previousrender.current)
  }, [text]);
  return (
    <div>
      <h1>This is useref example</h1>
      Type your text:{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2> The current render text is {text} </h2>
      <h2> The previous render text is {previousrender.current} </h2>
    </div>
  );
};

export default UseRef;
