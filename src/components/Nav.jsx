import React from 'react';
import { Link } from 'react-router-dom';
import fotoPerfil from '../assets/adriel.png';

function Nav() {
  return (
    <nav className="nav-menu"> 
      <ul className="nav-lista">
        <li className="nav-items"><Link to="/dashboard" className="nav-link">INICIO</Link></li>
        <li className="nav-items"><Link to="/proyectos" className="nav-link">PROYECTOS</Link></li>
        <li className="nav-items"><Link to="/contacto" className="nav-link">CONTACTO</Link></li>
        <li className="nav-items perfil">
          <span className="user-nombre"><Link to="/perfil" className="nav-link">valen</Link></span>
          <img src={fotoPerfil} alt="fotito" className="avatar" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;