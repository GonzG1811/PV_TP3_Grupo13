import React, { useState } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(obtenerProyectos());


    const handleEliminar = (id) => {
        eliminarProyecto(id);
        setProyectos(obtenerProyectos());
    };

    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectos(resultados);
    };

    return (
        <main>
            {}
            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Buscar proyecto..." 
                    onChange={handleBuscar} 
                />
            </section>

            <section className="proyectos-list">
                {}
                {proyectos.map((proy) => (
                    <div key={proy.id} className="proyecto-card">
                        <h3>{proy.titulo}</h3>
                        <p>{proy.categoria} - <span>{proy.estado}</span></p>
                        {}
                        <button onClick={() => handleEliminar(proy.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ListaProyectos;