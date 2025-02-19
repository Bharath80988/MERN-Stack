import { useState } from "react";

function about() {
  var statevar = 0;
  var [num, setNum] = useState(statevar);
  const [text, setText] = useState("");

  function handleDecrement() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>About us Page</h1>
      <h2>State Initial Value is {statevar}</h2>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating state: {num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}
export default about;
