import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// descomenten este
// import { UsuarioContext } from '../context/UsuarioContext'; 

import fotoValen from '../assets/adriel.png';
import fotoDefault from '../assets/sinfoto.png';

function Nav() {
  //borren este de abajo
  const usuario = { nombre: 'valen', rol: 'Alumno' }; 

  // descomenten esto
  // const { usuario } = useContext(UsuarioContext); 

  const fotoPerfil = usuario?.nombre?.toLowerCase() === 'valen' ? fotoValen : fotoDefault;

  return (
    <nav className="nav-menu"> 
      <ul className="nav-lista">
        <li className="nav-items"><Link to="/dashboard" className="nav-link">INICIO</Link></li>
        <li className="nav-items"><Link to="/proyectos" className="nav-link">PROYECTOS</Link></li>
        <li className="nav-items"><Link to="/contacto" className="nav-link">CONTACTO</Link></li>
        
        <li className="nav-items perfil">
          <div className="user-info">

            <Link to="/perfil" className="nav-link user-profile-button">
              <span className="user-nombre">{usuario?.nombre || 'Invitado'}</span>
              <span className="user-rol">{usuario?.rol || 'Sin Rol'}</span> 
            </Link>
          </div>
          <img src={fotoPerfil} alt="fotito" className="avatar" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;