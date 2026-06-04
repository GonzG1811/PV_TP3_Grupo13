import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerProyectos } from '../services/proyectoService';
import { Box, Typography, Paper, List, ListItem, Button } from '@mui/material';

const DetalleProyecto = () => {
    
    const { id } = useParams();
    
   
    const proyectos = obtenerProyectos();
    const proyecto = proyectos.find(p => p.id === parseInt(id));

    if (!proyecto) {
        return (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h5" color="error">
                    El proyecto no existe o no fue encontrado.
                </Typography>
                <Button component={Link} to="/proyectos" sx={{ mt: 2 }} variant="outlined">
                    Volver
                </Button>
            </Box>
        );
    }

    const { titulo, nombre, descripcion, recursos, equipo } = proyecto;

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }} className="detalle-proyecto">
            <Typography variant="h4" color="primary" gutterBottom>
                {titulo || nombre}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Descripción
            </Typography>
            <Typography variant="body1" paragraph>
                {descripcion}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Recursos
            </Typography>
            <List dense>
                {recursos && recursos.map((recurso, index) => (
                    <ListItem key={index}>• {recurso}</ListItem>
                ))}
            </List>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Equipo
            </Typography>
            <List dense>
                {equipo && equipo.map((persona, index) => (
                    <ListItem key={index}>
                        • {persona.nombre || persona}
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 4 }}>
                <Button variant="contained" component={Link} to="/proyectos">
                    Volver a la lista
                </Button>
            </Box>
        </Paper>
    );
};

export default DetalleProyecto;