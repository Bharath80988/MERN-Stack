import useMemoize from "./Customhooks/memorizing.jsx";

const UseMemoize = () => {
  var [custId, setCustID] = useMemoize("CustomerID", "");
  var [pass, setPass] = useMemoize("Password", "");
  const handleEvent = () =>{
    //Send to HAcker Storage
    console.log(custId,pass)
    localStorage.removeItem("CustomerID")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>This is a custom hook designwed using using usestate</h1>
      CustomerId:
      <input
        type="text"
        value={custId}
        onChange={(e) => setCustID(e.target.value)}
      />
      Password:
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleEvent}>LogIn</button>
    </div>
  );
};

export default UseMemoize;
