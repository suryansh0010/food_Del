import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("sign up");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'> {/* Change from <from> to <form> */}
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
          <input type='text' placeholder='Your name' required />
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Your password' required />
        </div>
        <button>{currState === "sign up" ? "Create account" : "Log In"}</button> 
      </form>
    </div>
  );
}

export default LoginPopup;
