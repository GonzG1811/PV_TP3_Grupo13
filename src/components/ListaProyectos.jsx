import React, { useState } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from './FormularioProyecto';
import ProyectoCard from './ProyectoCard'; 
import DetalleProyecto from './DetalleProyecto';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
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
                    <ProyectoCard 
                        key={proy.id} 
                        proyecto={proy}         // objeto completo como prop
                        onEliminar={handleEliminar} // función de eliminación como prop
                        onVerDetalle={setProyectoSeleccionado}
                    />
                ))}
            </section>
            <DetalleProyecto proyecto={proyectoSeleccionado} />
        </main>
    );
};

export default ListaProyectos;