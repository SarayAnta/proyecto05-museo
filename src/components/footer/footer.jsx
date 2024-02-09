import React from 'react';
import "./footer.css";

import Copyright from '../../img/Copyright.png';
import GitHub from '../../img/GitHub.png';
import Instagram from '../../img/Instagram.png'
import mail from '../../img/mail.png';
import Twitter from '../../img/TwitterX.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Copyright} alt="Copyright" />
      <img src={GitHub} alt="GitHub" />
      <img src={Instagram} alt="Instagram" />
      <img src={mail} alt="mail" />
      <img src={Twitter} alt="Twitter" />
    </div>
  );
}

export default Footer;