import React from 'react';

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    const { id, titulo, categoria, estado } = proyecto;
    
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoría: {categoria}</p>
            <p>Estado: <strong>{estado}</strong></p>            
            
            {/* Los botones toman automáticamente tu estilo general de button */}
            <div>
                <button onClick={() => onVerDetalle(proyecto)}>
                    Ver Detalle
                </button>
                <button onClick={() => onEliminar(id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default ProyectoCard;