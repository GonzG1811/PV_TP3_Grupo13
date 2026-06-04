import React from 'react';
import { Alert } from '@mui/material';

const RegistroActividad = ({ fecha }) => {
    if (!fecha) {
        return null;
    }

    return (
        <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
            Última modificación de proyectos: <strong>{fecha}</strong>
        </Alert>
    );
};

export default RegistroActividad;