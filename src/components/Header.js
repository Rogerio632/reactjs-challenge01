import React from 'react';
import '../assets/css/Default.css';
import fb_icon from '../assets/img/facebook-1.png';
import user_icon from '../assets/img/user.svg';

function Header(){
  return (
    <nav>
      <ul className="menu">
        <li><img src={fb_icon} className="fb_icon" /></li>
        <li>Meu perfil <img src={user_icon} className="user_icon" /></li>
      </ul>
    </nav>
  );
}

export default Header;