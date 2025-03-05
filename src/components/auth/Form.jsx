import React, { useState } from "react";
import passwordIcon from "../../assets/PASSWORD-UNHIDE-STATE.png";

/**
 * Sign in and Sign up forms
 * @returns my own form :3
 */
const Form = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="form-container">
            <div className="account-creation-text">
                <span className="title-sign">Create an account</span>
                <p>Have an account? <span className="link">Spin in</span></p>
            </div>

            <div className="sign-inputs">
                <input type="text" id="username" placeholder="Username"/>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password"/>
                <div className="show-password-container">
                    <img src={passwordIcon} alt=""/>
                    <span>Show Password</span>
                </div>
                <div className="lets-go-btn-container">
                    <button>Let's Go</button>
                </div>
            </div>
        </div>
    );
}

export default Form;