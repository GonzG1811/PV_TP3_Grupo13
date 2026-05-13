// src/services/proyectoService.js

const proyectoService = (() => {
    let proyectos = [
        { id: 1, titulo: "C++", categoria: "Programación", estado: "Finalizado" },
        { id: 2, titulo: "HTML", categoria: "Maquetación", estado: "Finalizado" },
        { id: 3, titulo: "CSS", categoria: "Diseño", estado: "En curso" },
        { id: 4, titulo: "JavaScript", categoria: "Interactividad", estado: "En curso" },
        { id: 5, titulo: "Python", categoria: "Data Science", estado: "Pendiente" },
    ];

    const obtenerProyectos = () => [...proyectos]; 
    const agregarProyecto = (nuevo) => { 
        proyectos.push(nuevo);
    };

    const eliminarProyecto = (id) => { 
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => 
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

 
export const { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } = proyectoService;