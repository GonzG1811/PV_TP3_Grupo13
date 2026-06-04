import React, { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService';
import FormularioProyecto from '../components/FormularioProyecto';
import ProyectoCard from '../components/ProyectoCard'; 
import RegistroActividad from '../components/RegistroActividad';
import { Box, TextField, Grid } from '@mui/material';

const ListaProyectos = () => {
    const listaInicial = obtenerProyectos();
    const [proyectos, setProyectos] = useState(listaInicial);
    const [proyectosFiltrados, setProyectosFiltrados] = useState(listaInicial);
    const [ultimaModificacion, setUltimaModificacion] = useState(null);
    const primeraCarga = useRef(0);

    useEffect(() => {
        if (primeraCarga.current < 1) {
            primeraCarga.current++;
            return;
        }
        const fechaActual = new Date().toLocaleString('es-AR');
        setUltimaModificacion(fechaActual);
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
        <Box component="main" sx={{ mt: 2 }}>
            <FormularioProyecto alGuardar={actualizarLista} />
            
            <Box sx={{ my: 3 }}>
                <TextField 
                    fullWidth
                    label="Buscar proyecto por nombre..."
                    variant="outlined"
                    onChange={handleBuscar} 
                />
            </Box>

            <Grid container spacing={3} className="contenedor-cards">
                {proyectosFiltrados.map((proy) => (
                    <Grid item xs={12} sm={6} md={4} key={proy.id}>
                        <ProyectoCard 
                            proyecto={proy} 
                            onEliminar={handleEliminar} 
                            
                        />
                    </Grid>
                ))}
            </Grid>

            {ultimaModificacion && (
                <RegistroActividad fecha={ultimaModificacion} />
            )}
        </Box>
    );
};

export default ListaProyectos;