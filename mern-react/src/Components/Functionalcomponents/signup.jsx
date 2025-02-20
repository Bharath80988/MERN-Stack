import '../css/signup.css'

const Signup = ()=>{
    return(
        <div className="signup-container">
        <form>
            <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" required />
            </div>

            <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" required />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
            </div>

            <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" required />
            </div>

            <div className="input-group">
                <label>Date of Birth</label>
                <input type="date" required />
            </div>

            <div className="input-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter your mobile number" required />
            </div>

            <div className="input-group">
                <label>Gender</label>
                <div className="gender-options">
                    <input type="radio" name="gender" required /> Male
                    <input type="radio" name="gender" required /> Female
                    <input type="radio" name="gender" required /> Other
                </div>
            </div>

            <button type="submit">Sign Up</button>
        </form>
        </div>
    )
}
export default Signup