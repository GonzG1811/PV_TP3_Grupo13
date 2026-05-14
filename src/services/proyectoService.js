// src/services/proyectoService.js
    // Arreglo privado de proyectos.
    // Cada objeto representa un proyecto.
const proyectoService = (() => {
    let proyectos = [
        { id: 1, titulo: "C++", categoria: "Programación", estado: "Finalizado" },
        { id: 2, titulo: "HTML", categoria: "Maquetación", estado: "Finalizado" },
        { id: 3, titulo: "CSS", categoria: "Diseño", estado: "En curso" },
        { id: 4, titulo: "JavaScript", categoria: "Interactividad", estado: "En curso" },
        { id: 5, titulo: "Python", categoria: "Data Science", estado: "Pendiente" },
    ];
    // Retorna una copia del arreglo de proyectos.
    // Se utiliza spread operator para evitar modificar
    // el arreglo original directamente.
    const obtenerProyectos = () => [...proyectos]; 
        // Agrega un nuevo proyecto al arreglo.
    const agregarProyecto = (nuevo) => { 
        const nuevoId = proyectos.length > 0 ? Math.max(...proyectos.map(p => p.id)) + 1 : 1;
        proyectos.push({ id: nuevoId, ...nuevo });
    };
    // filter genera un nuevo arreglo excluyendo
        // el proyecto cuyo id coincida.
    const eliminarProyecto = (id) => { 
        proyectos = proyectos.filter(p => p.id !== id);
    };
        // toLowerCase permite comparar sin importar mayúsculas.
        // includes verifica si el texto está contenido en el título.
    const buscarProyecto = (texto) => {
        return proyectos.filter(p => 
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };
 // Se retornan únicamente las funciones públicas del módulo.
    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

 // Exportación de las funciones para poder utilizarlas
// desde otros archivos del proyecto.
export const { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } = proyectoService;