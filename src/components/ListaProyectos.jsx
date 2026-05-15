import React, { useState } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from './FormularioProyecto';

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(obtenerProyectos());

    const actualizarLista = () => {
        setProyectos(obtenerProyectos());
    };

    const handleEliminar = (id) => {
        eliminarProyecto(id);
        actualizarLista();
    };

    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectos(resultados);
    };

    return (
        <main>
            <FormularioProyecto alGuardar={actualizarLista} />
            <section style={{ marginTop: '30px', marginBottom: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Buscar proyecto por nombre..." 
                    onChange={handleBuscar} 
                    style={{ width: '100%', padding: '10px' }}
                />
            </section>
            <section className="contenedor-cards">
                {proyectos.map((proy) => (
                    <div key={proy.id} className="card">
                        <h3>{proy.titulo}</h3>
                        <p>{proy.categoria} - <strong>{proy.estado}</strong></p>
                        <button 
                            onClick={() => handleEliminar(proy.id)}
                            style={{ backgroundColor: '#dc2626', marginTop: '10px' }}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ListaProyectos;