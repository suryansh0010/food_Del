import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("sign up");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'> 
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
        {currState === "Login"?<></>:<input type='text' placeholder='Your name' required />}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Your password' required />
        </div>
        <button>{currState === "sign up" ? "Create account" : "Log In"}</button> 
        <div className='login-popup-condition'>
          <input type='checkbox' required/>
          <p>By continuing</p>
        </div>
      </form>
    </div>
  );
}

export default LoginPopup;
