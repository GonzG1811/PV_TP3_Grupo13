import React from 'react';

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