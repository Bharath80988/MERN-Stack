import { createContext } from "react";
import Faculty from "./Faculty";
// export const ResultPublish=createContext()

export const ResultPublish = createContext() 
const Coe = () => {
  return (
    <ResultPublish.Provider value={{sgpa:"10 SGPA",cgpa:"10 CGPA"}}>
        <Faculty />
      <h1>Results Published!</h1>
      {/* <StudentResults sgpa="10sgpa" cgpa="10sgpa"/> */}
    </ResultPublish.Provider>
  );
};
export default Coe;
