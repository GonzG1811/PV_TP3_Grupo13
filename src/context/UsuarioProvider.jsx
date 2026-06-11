import { useState, useEffect } from 'react';
import { UsuarioContext, usuarioInicial } from './UsuarioContext';

export function UsuarioProvider({ children }) {

  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : usuarioInicial;
  });

  
  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  
  const actualizarPerfil = (nuevosDatos) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...nuevosDatos
    }));
  };

  
  const valor = {
    usuario,
    actualizarPerfil
  };

  return (
    <UsuarioContext.Provider value={valor}>
      {children}
    </UsuarioContext.Provider>
  );
}