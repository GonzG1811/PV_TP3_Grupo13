import React, { useState, useEffect } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from './FormularioProyecto';
import ProyectoCard from './ProyectoCard'; 
import DetalleProyecto from './DetalleProyecto';
import RegistroActividad from './RegistroActividad';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaModificacion, setUltimaModificacion] = useState('');

    useEffect(() => {
        const fechaActual = new Date().toLocaleString('es-AR');
        setUltimaModificacion(fechaActual);
    }, [proyectos]);
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
            
            <section>
                {/* El input toma automáticamente tu estilo general */}
                <input 
                    type="text" 
                    placeholder="Buscar proyecto por nombre..." 
                    onChange={handleBuscar} 
                />
            </section>

            <section className="contenedor-cards">
                {proyectos.map((proy) => (
                    <ProyectoCard 
                        key={proy.id} 
                        proyecto={proy} 
                        onEliminar={handleEliminar} 
                        onVerDetalle={setProyectoSeleccionado}
                    />
                ))}
            </section>

            <DetalleProyecto proyecto={proyectoSeleccionado} />
            
            <RegistroActividad fecha={ultimaModificacion} />
        </main>
    );
};

export default ListaProyectos;