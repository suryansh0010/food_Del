import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("sign up");

  // Handle switching between sign up and login
  const toggleState = () => {
    setCurrState(currState === "sign up" ? "Login" : "sign up");
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container'> 
        <div className='login-popup-title'>
          <h2>{currState === "sign up" ? "Sign Up" : "Login"}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>

        <div className='login-popup-inputs'>
          {/* Only show "name" input if it's "sign up" */}
          {currState === "sign up" && <input type='text' placeholder='Your name' required />}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Your password' required />
        </div>

        <button>{currState === "sign up" ? "Create account" : "Log In"}</button> 

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        
        {currState === "Login" ? (
          <p>
            Don't have an account? <span onClick={toggleState}>Create one</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={toggleState}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
