import React, { useState } from 'react';
import { agregarProyecto } from '../services/proyectoService';
import { TextField, Button, Box, MenuItem, Typography } from '@mui/material';

function FormularioProyecto({ alGuardar }) {
    const [proyectoData, setProyectoData] = useState({
        titulo: '',
        categoria: '',
        estado: 'Pendiente',
        descripcion: '',
        recursos: '',
        equipo: ''
    });

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyectoData;

    const manejarEnvio = (e) => {
        e.preventDefault();

        agregarProyecto({
            ...proyectoData,
            recursos: [proyectoData.recursos],
            equipo: [{ nombre: proyectoData.equipo, rol: "" }]
        });

        setProyectoData({
            titulo: '',
            categoria: '',
            estado: 'Pendiente',
            descripcion: '',
            recursos: '',
            equipo: ''
        });

        alGuardar();
    };

    return (
        <Box component="section" sx={{ maxWidth: 500, mx: 'auto', mt: 3, p: 3, boxShadow: 2, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>Crear Nuevo Proyecto</Typography>

            <Box component="form" onSubmit={manejarEnvio} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                
                <TextField 
                    label="Nombre del proyecto" 
                    variant="outlined"
                    value={titulo} 
                    onChange={(e) => setProyectoData({ ...proyectoData, titulo: e.target.value })} 
                    required 
                    fullWidth 
                />

                <TextField 
                    label="Tema / Categoría" 
                    variant="outlined"
                    value={categoria} 
                    onChange={(e) => setProyectoData({ ...proyectoData, categoria: e.target.value })} 
                    required 
                    fullWidth 
                />

                <TextField 
                    select 
                    label="Estado" 
                    value={estado} 
                    onChange={(e) => setProyectoData({ ...proyectoData, estado: e.target.value })}
                    fullWidth
                >
                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                    <MenuItem value="En curso">En curso</MenuItem>
                    <MenuItem value="Finalizado">Finalizado</MenuItem>
                </TextField>

                <TextField 
                    label="Descripción" 
                    multiline
                    rows={3}
                    value={descripcion} 
                    onChange={(e) => setProyectoData({ ...proyectoData, descripcion: e.target.value })} 
                    required 
                    fullWidth 
                />

                <TextField 
                    label="Recursos (PDF, Drive, GitHub)" 
                    variant="outlined"
                    value={recursos} 
                    onChange={(e) => setProyectoData({ ...proyectoData, recursos: e.target.value })} 
                    fullWidth 
                />

                <TextField 
                    label="Equipo (Ej: Gustavo - Frontend)" 
                    variant="outlined"
                    value={equipo} 
                    onChange={(e) => setProyectoData({ ...proyectoData, equipo: e.target.value })} 
                    fullWidth 
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                    Crear Proyecto
                </Button>

            </Box>
        </Box>
    );
}

export default FormularioProyecto;