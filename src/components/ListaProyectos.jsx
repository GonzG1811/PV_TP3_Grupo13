import React, { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from './FormularioProyecto';
import ProyectoCard from './ProyectoCard'; 
import DetalleProyecto from './DetalleProyecto';
import RegistroActividad from '../../../../trabajo Practico N3.pdf/pvtp03GrupoN13/mi-proyecto/src/components/RegistroActividad';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaModificacion, setUltimaModificacion] = useState(null);
    const [proyectosActuales, setProyectosActuales] = useState(obtenerProyectos());
    
    // Flag para evitar la ejecución en la carga inicial
    const esMontagueInicial = useRef(true);
    // Ref para rastrear el último estado de proyectos (real)
    const ultimoProyectosRef = useRef(obtenerProyectos());

    /**
     * useEffect principal: Escucha cambios en la lista de proyectos
     * Se ejecuta SOLO cuando cambia la propiedad 'proyectos'
     * - Evita la ejecución inicial gracias al flag esMontagueInicial
     * - Captura la fecha/hora del cambio
     * - Se aísla del filtro de búsqueda porque este NO modifica 'proyectos' real
     */
    useEffect(() => {
        // Si es el primer render, saltamos la ejecución
        if (esMontagueInicial.current) {
            esMontagueInicial.current = false;
            return;
        }

        // Verificar si realmente cambió la lista de proyectos (no solo el filtro)
        const proyectosAhora = obtenerProyectos();
        const cambioReal = proyectosAhora.length !== ultimoProyectosRef.current.length;

        if (cambioReal) {
            // Capturar la fecha y hora actual del sistema
            const ahora = new Date();
            setUltimaModificacion(ahora);
            
            // Actualizar el ref para próximas comparaciones
            ultimoProyectosRef.current = proyectosAhora;
            
            console.log('✅ Cambio detectado en la lista de proyectos');
            console.log('📅 Registrado en:', ahora.toLocaleString('es-AR'));
        }
    }, [proyectos]); // Dependencia única: proyectos

    /**
     * Actualiza la lista de proyectos (llamado al agregar/eliminar)
     */
    const actualizarLista = () => {
        const nuevosProyectos = obtenerProyectos();
        setProyectos(nuevosProyectos);
    };

    /**
     * Elimina un proyecto por ID
     */
    const handleEliminar = (id) => {
        eliminarProyecto(id);
        actualizarLista();
    };

    /**
     * Busca proyectos (IMPORTANTE: NO modifica el estado real 'proyectos')
     * Solo filtra la visualización, por lo que NO dispara el useEffect
     */
    const handleBuscar = (e) => {
        const resultados = buscarProyecto(e.target.value);
        setProyectosActuales(resultados);
    };

    // Usar 'proyectosActuales' para la visualización (puede estar filtrado)
    const proyectosAMostrar = proyectosActuales;

    return (
        <main>
            <FormularioProyecto alGuardar={actualizarLista} />
            
            <section>
                {/* El input de búsqueda - NO dispara el registro */}
                <input 
                    type="text" 
                    placeholder="Buscar proyecto por nombre..." 
                    onChange={handleBuscar} 
                />
            </section>

            <section className="contenedor-cards">
                {proyectosAMostrar.map((proy) => (
                    <ProyectoCard 
                        key={proy.id} 
                        proyecto={proy} 
                        onEliminar={handleEliminar} 
                        onVerDetalle={setProyectoSeleccionado}
                    />
                ))}
            </section>

            <DetalleProyecto proyecto={proyectoSeleccionado} />
            
            {/* Solo se renderiza cuando hay una fecha válida (después del primer cambio real) */}
            <RegistroActividad ultimaModificacion={ultimaModificacion} />
        </main>
    );
};

export default ListaProyectos;
