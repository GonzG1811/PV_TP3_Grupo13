import { useState, useEffect } from 'react';
import { UsuarioContext, usuarioInicial } from './UsuarioContext';

export function UsuarioProvider({ children }) {
  const inicializarUsuario = () => {
    // Usamos 'usuario_tp' para evitar conflictos con otros proyectos locales
    const usuarioGuardado = localStorage.getItem('usuario_tp');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : usuarioInicial;
  };

  const [usuario, setUsuario] = useState(inicializarUsuario);
  useEffect(() => {
    localStorage.setItem('usuario_tp', JSON.stringify(usuario));
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