import React from 'react';

const RegistroActividad = ({ fecha }) => {
    return (
        <section>
            <p>
                Última modificación de proyectos: <strong>{fecha ? fecha : "Sin modificaciones recientes"}</strong>
            </p>
        </section>
    );
};

export default RegistroActividad;