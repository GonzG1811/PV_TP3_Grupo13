const DetalleProyecto = ({ proyecto }) => {

    if (!proyecto) {
        return <p>No hay proyecto seleccionado</p>;
    }

    const {
        titulo,
        descripcion,
        recursos,
        equipo
    } = proyecto;

    return (
        <section className="detalle-proyecto">

            <h2>{titulo}</h2>

            <h3>Descripción</h3>

            <p>{descripcion}</p>

            <h3>Recursos</h3>

            <ul>
            {recursos.map((recurso, index) => (
            <li key={index}>{recurso}</li>
                 ))}
            </ul>

            <h3>Equipo</h3>

           <ul>
    {equipo.map((persona, index) => (
        <li key={index}>
            {persona.nombre}
        </li>
             ))}
        </ul>

        </section>
    );
};

export default DetalleProyecto;