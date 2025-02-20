import { Link } from "react-router-dom";
function login(){
    return(
        <div>
            <h1>Login Page</h1>
            <p>Create an account ? <Link to='/signup'>Signup</Link></p>
        </div>
    )
}
export default login;