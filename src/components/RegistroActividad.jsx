import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const RegistroActividad = ({ fecha }) => {

    if (!fecha) {
        return null;
    }

    return (
        <section>
            <p>
                Última modificación de proyectos: <strong>{fecha}</strong>
            </p>
        </section>
    );
};

export default RegistroActividad;