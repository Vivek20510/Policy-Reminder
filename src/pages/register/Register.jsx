import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="text" placeholder="Enter your password..." />
        <label>Confirm Password</label>
        <input className="registerInput" type="password" placeholder="Confirm your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">LOGIN</Link>
        </button>
    </div>
    )
}
