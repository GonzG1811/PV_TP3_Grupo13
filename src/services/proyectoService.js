// src/services/proyectoService.js
    // Arreglo privado de proyectos.
    // Cada objeto representa un proyecto.
const proyectoService = (() => {
    let proyectos = [
        { id: 1, titulo: "C++", categoria: "Programación", estado: "Finalizado",descripcion: "Proyecto enfocado en el aprendizaje de programación estructurada utilizando C++. Se desarrollaron algoritmos básicos aplicando variables, funciones, condiciones y ciclos. Además, se realizaron ejercicios prácticos orientados as mejorar la lógica de programación y la resolución de problemas mediante estructuras de control y arreglos",recursos:["PDF , introducción a C++","Drive Proyecto Final","GitHub repositorio C++"],equipo:[{nombre: "Valen",rol:"Desarrollador",},{nombre:"Mateo",rol:"Tester"}] },
        { id: 2, titulo: "HTML", categoria: "Maquetación", estado: "Finalizado",descripcion: "Proyecto destinado al aprendizaje de HTML5 y la estructura básica de páginas web. Se trabajó con etiquetas semánticas, formularios, tablas e inserción de multimedia. También se aplicaron buenas prácticas de organización del contenido para mejorar la accesibilidad y la compatibilidad entre distintos navegadores.",
        recursos: [
            "PDF Etiquetas HTML",
            "Drive Diseños Web",
            "GitHub Frontend HTML"
        ],
        equipo: [
            { nombre: "Lucía", rol: "Diseñadora" },
            { nombre: "Carlos", rol: "Frontend" }
        ] },
        { id: 3, titulo: "CSS", categoria: "Diseño", estado: "En curso", 
         descripcion: 
                "Proyecto orientado al diseño visual de interfaces web mediante CSS. Se utilizaron propiedades de estilos, flexbox y grid para organizar el contenido. Además, se trabajó en la creación de diseños responsivos adaptados a dispositivos móviles, tablets y computadoras de escritorio.",
            recursos: [
                "PDF Flexbox y Grid",
                "Drive Recursos CSS",
                "GitHub Estilos Web"
            ],

            equipo: [
                { nombre: "Ana", rol: "UI Designer" },
                { nombre: "Pedro", rol: "Frontend" }
            ]
        },
        { id: 4, titulo: "JavaScript", categoria: "Interactividad", estado: "En curso" ,
                descripcion: " Proyecto enfocado en agregar interactividad a páginas web utilizando JavaScript.Se implementaron eventos, manipulación del DOM y validaciones de formularios. También se desarrollaron funcionalidades dinámicas para mejorar la experiencia del usuario y optimizar la interacción con la aplicación.",
        recursos: [
            "PDF JavaScript Básico",
            "Drive Ejercicios JS",
            "GitHub Proyecto Interactivo"
        ],
        equipo: [
            { nombre: "Sofía", rol: "Frontend" },
            { nombre: "Martín", rol: "Backend" }
        ]
        },
        { id: 5, titulo: "Python", categoria: "Data Science", estado: "Pendiente",
              descripcion: "Proyecto introductorio al análisis de datos utilizando Python. Se trabajará con estructuras de datos, funciones y librerías orientadas a Data Science. El objetivo será desarrollar herramientas para procesar información, generar estadísticas y visualizar resultados de manera eficiente.",

        recursos: [
            "PDF Introducción a Python",
            "Drive Dataset Proyecto",
            "GitHub Data Science"
        ],

        equipo: [
            { nombre: "Valentina", rol: "Analista de Datos" },
            { nombre: "Diego", rol: "Programador Python" }
        ]

        },
    ];

    
    if (!localStorage.getItem("mis_proyectos_tp")) {
        localStorage.setItem("mis_proyectos_tp", JSON.stringify(proyectos));
    }

    // Retorna una copia del arreglo de proyectos leyendo desde localStorage.
    const obtenerProyectos = () => {
        const guardados = localStorage.getItem("mis_proyectos_tp");
        proyectos = JSON.parse(guardados); 
        return [...proyectos]; 
    }; 

    // Agrega un nuevo proyecto al arreglo y actualiza el localStorage.
    const agregarProyecto = (nuevo) => { 
        const nuevoId = proyectos.length > 0 ? Math.max(...proyectos.map(p => p.id)) + 1 : 1;
        proyectos.push({ id: nuevoId, ...nuevo });

        localStorage.setItem("mis_proyectos_tp", JSON.stringify(proyectos));
    };

    // filter genera un nuevo arreglo excluyendo el proyecto cuyo id coincida.
    const eliminarProyecto = (id) => { 
        proyectos = proyectos.filter(p => p.id !== id);

        localStorage.setItem("mis_proyectos_tp", JSON.stringify(proyectos));
    };

    // toLowerCase permite comparar sin importar mayúsculas.
    // includes verifica si el texto está contenido en el título.
    const buscarProyecto = (texto) => {
        const actuales = obtenerProyectos();
        return actuales.filter(p => 
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