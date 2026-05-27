import React, { useState } from 'react';

function FormularioProyecto({ onAgregarProyecto }) {

    const [proyectoData, setProyectoData] = useState({
        titulo: '',
        categoria: '',
        estado: 'Pendiente',
        descripcion:'',
        recursos: '',
        equipo: ''
    });

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyectoData;

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nuevoProyecto = {
            ...proyectoData,
            recursos: [
                proyectoData.recursos
            ],
            equipo: [
                {
                    nombre: proyectoData.equipo,
                    rol: ""
                }
            ]
        };

        onAgregarProyecto(nuevoProyecto);

        setProyectoData({
            titulo: '',
            categoria: '',
            estado: 'Pendiente',
            descripcion:'',
            recursos: '',
            equipo: ''
        });
    };

    return (
        <section className="contenedor-formulario">
            <h3>Crear Nuevo Proyecto</h3>
            <form onSubmit={manejarEnvio} className="form-crear">
                <div className="input-group">
                    <label>Nombre del proyecto:</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setProyectoData({ ...proyectoData, titulo: e.target.value })} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Tema / Categoría:</label>
                    <input 
                        type="text" 
                        value={categoria} 
                        onChange={(e) => setProyectoData({ ...proyectoData, categoria: e.target.value })} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Estado:</label>
                    <select 
                        value={estado} 
                        onChange={(e) => setProyectoData({ ...proyectoData, estado: e.target.value })}
                    >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>
                
                <div className="input-group">
                    <label>Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) =>
                            setProyectoData({
                                ...proyectoData,
                                descripcion: e.target.value
                            })
                        }
                        placeholder="Descripción del proyecto"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Recursos:</label>
                    <input
                        type="text"
                        value={recursos}
                        onChange={(e) =>
                            setProyectoData({
                                ...proyectoData,
                                recursos: e.target.value
                            })
                        }
                        placeholder="PDF, Drive, GitHub"
                    />
                </div>

                <div className="input-group">
                    <label>Equipo:</label>
                    <input
                        type="text"
                        value={equipo}
                        onChange={(e) =>
                            setProyectoData({
                                ...proyectoData,
                                equipo: e.target.value
                            })
                        }
                        placeholder="Gustavo - Frontend"
                    />
                </div>

                <button type="submit" className="btn-crear">Crear Proyecto</button>
            </form>
        </section>
    );
}

export default FormularioProyecto;