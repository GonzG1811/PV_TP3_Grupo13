function Nav() {
  return (
    <nav className="nav-menu"> 
      <ul className="nav-lista">
        <li className="nav-items"><a href="/" className="nav-link">INICIO</a></li>
        <li className="nav-items"><a href="#" className="nav-link">PROYECTOS</a></li>
        <li className="nav-items"><a href="#" className="nav-link">CONTACTO</a></li>
        <li className="nav-items perfil">
          <span className="user-nombre"><a href="#" className="nav-link">valen</a></span>
          <img src="../img/adriel.png" alt="fotito" className="avatar" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;