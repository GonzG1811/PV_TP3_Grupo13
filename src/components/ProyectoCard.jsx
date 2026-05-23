import React from 'react';
const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    const { id, titulo, categoria, estado } = proyecto;
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoría: {categoria}</p>
            <p>Estado: <strong>{estado}</strong></p>            
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                        onClick={() => onVerDetalle(proyecto)}
                        style={{ backgroundColor: '#2563eb' }}
                    >
                        Ver Detalle
                    </button>
                
                <button 
                    onClick={() => onEliminar(id)} 
                    style={{ backgroundColor: '#dc2626' }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default ProyectoCard;