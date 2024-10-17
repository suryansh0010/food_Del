import React from 'react';
import './Header.css';
import headerImg from '../../assets/header_img.png'; // Adjust path to your image

const Header = () => {
  return (
    <div className='header'>
      <img src={headerImg} alt='Header' className='header-img' />
      <div className='header-contents'>
        <h2 className='header-title'>Order your favourite food here</h2> {/* Separate title */}
        <div className='header-subtext'>
          <p>Choose from a diverse menu featuring a delectable array crafted with the finest ingredients and culinary skills.</p>
        </div>
        <button>View more</button>
      </div>
    </div>
  );
}

export default Header;
