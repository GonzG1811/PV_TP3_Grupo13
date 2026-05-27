import React from 'react';
import '../css/RegistroActividad.css';

/**
 * Componente de Registro de Actividad
 * Muestra la fecha y hora de la última modificación en la lista de proyectos
 * con el formato exacto requerido
 * @param {Date|String} ultimaModificacion - Fecha y hora del último cambio
 */
const RegistroActividad = ({ ultimaModificacion }) => {
  const formatearFecha = (fecha) => {
    if (!fecha) return null;
    
    const date = fecha instanceof Date ? fecha : new Date(fecha);
    
    // Formato exacto requerido: "Última actualización de la lista: DD/MM/AAAA a las HH:MM hs."
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const año = date.getFullYear();
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    
    return `Última actualización de la lista: ${dia}/${mes}/${año} a las ${horas}:${minutos} hs.`;
  };

  // Solo renderiza si hay una fecha válida
  if (!ultimaModificacion) {
    return null;
  }

  return (
    <section className="registro-actividad">
      <div className="registro-container">
        <p className="registro-fecha">
          {formatearFecha(ultimaModificacion)}
        </p>
      </div>
    </section>
  );
};

export default RegistroActividad;
