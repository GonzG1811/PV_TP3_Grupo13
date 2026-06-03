import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    const navigate = useNavigate();
    
    return (
        <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {titulo}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    Categoría: {categoria}
                </Typography>
                <Typography variant="body2">
                    Estado: <strong>{estado}</strong>
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button 
                    variant="contained" 
                    size="small" 
                    onClick={() => navigate(`/proyectos/${id}`)}
                >
                    Ver Detalle
                </Button>
                <Button 
                    variant="outlined" 
                    color="error" 
                    size="small" 
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProyectoCard;