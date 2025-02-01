import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='Logo' />
          <p>Hi, this is a food website created by Suryansh Awasthi</p>
          <div className='footer-social-icons'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt='Facebook Icon' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt='Twitter Icon' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt='LinkedIn Icon' />
            </a>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="tel:+17002003001">7002003001</a></li>
            <li><a href="mailto:suryansh@gmail.com">suryansh@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2025 Suryansh Awasthi. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
