import { ResultPublish } from "./CoE";
import Exam from "./Exam";
import { useContext } from "react";

const result = useContext(ResultPublish)
const StudentResults = (res) => {
    return (
      <div>
        <h1>Result:</h1>
        <h2>The results are here</h2>
        <h1>CGPA is : {res.sgpa}</h1>
        <h1>SGPA is : {res.cgpa}</h1>
      </div>
    );
};
export default StudentResults;
