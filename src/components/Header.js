import React from 'react';
import '../assets/css/Default.css';
import fb_icon from '../assets/img/facebook-1.png';
import user_icon from '../assets/img/user.svg';

//Responsável por exibir a logo e o link para acessar o perfil;
function Header(){
  return (
    <nav>
      <ul className="menu">
        <li><a href="#"><img src={fb_icon} className="fb_icon" /></a></li>
        <li><a href="#">Meu perfil <img src={user_icon} className="user_icon" /></a></li>
      </ul>
    </nav>
  );
}

export default Header;