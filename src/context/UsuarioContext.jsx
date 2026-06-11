import { createContext } from 'react';


export const UsuarioContext = createContext();

// Valores por defecto (usuario logueado simulado)
export const usuarioInicial = {
  nombre: "Juan Pérez",
  dni: "12345678",
  rol: "Docente",
  institucion: "Instituto Técnico Nacional"
};