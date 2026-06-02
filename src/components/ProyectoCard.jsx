import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    const navigate = useNavigate();
    
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoría: {categoria}</p>
            <p>Estado: <strong>{estado}</strong></p>            
            
            <div>
                <button onClick={() => navigate(`/proyectos/${id}`)}>
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