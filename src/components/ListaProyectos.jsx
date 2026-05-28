import React, { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from './FormularioProyecto';
import ProyectoCard from './ProyectoCard'; 
import DetalleProyecto from './DetalleProyecto';
import RegistroActividad from './RegistroActividad';

const ListaProyectos = () => {
    const listaInicial = obtenerProyectos();
    const [proyectos, setProyectos] = useState(listaInicial);
    const [proyectosFiltrados, setProyectosFiltrados] = useState(listaInicial);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaModificacion, setUltimaModificacion] = useState(null);
    const primeraCarga = useRef(true);
useEffect(() => {

    if (primeraCarga.current) {
        primeraCarga.current = false;
    } else {
        const fechaActual = new Date().toLocaleString('es-AR');
        setUltimaModificacion(fechaActual);
    }

}, [proyectos]);
    const actualizarLista = () => {

    const listaActualizada = obtenerProyectos();

    setProyectos(listaActualizada);
    setProyectosFiltrados(listaActualizada);
};

    const handleEliminar = (id) => {
        eliminarProyecto(id);
        actualizarLista();
    };

    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectosFiltrados(resultados);
    };

    return (
        <main>
            <FormularioProyecto alGuardar={actualizarLista} />
            
            <section>
                <input 
                    type="text" 
                    placeholder="Buscar proyecto por nombre..." 
                    onChange={handleBuscar} 
                />
            </section>

            <section className="contenedor-cards">
                {proyectosFiltrados.map((proy) => (
                    <ProyectoCard 
                        key={proy.id} 
                        proyecto={proy} 
                        onEliminar={handleEliminar} 
                        onVerDetalle={setProyectoSeleccionado}
                    />
                ))}
            </section>

            <DetalleProyecto proyecto={proyectoSeleccionado} />
            
            {ultimaModificacion && (
                <RegistroActividad fecha={ultimaModificacion} />
                )}
        </main>
    );
};

export default ListaProyectos;