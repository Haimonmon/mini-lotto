import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import passwordIcon from "../../assets/PASSWORD-UNHIDE-STATE.png";

/**
 * Sign in and Sign up forms
 * @returns my own form :3
 */
const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const payload = { username, password };  

            const response = await axios.post("http://localhost:8000/v1/account/", payload, {
                headers: { 
                    apikey: "your apikey go here" 
                },
            });

            if (response.data.success) {
                navigate("/");
            } else {
                throw new Error(response.data.message || "Signup failed");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="form-container">
            <div className="account-creation-text">
                <span className="title-sign">Create an account</span>
                <p>Have an account? <Link to="/sign-in" className="link">Spin in</Link></p>
            </div>

            <form className="sign-inputs" onSubmit={handleSignup}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div className="show-password-container">
                    <img src={passwordIcon} alt=""/>
                    <span>{showPassword ? "Hide" : "Show"} Password</span>
                </div>
                <div className="lets-go-btn-container">
                    <button type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    );
}

export default Form;