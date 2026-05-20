import React, { useState } from 'react';
import { agregarProyecto } from '../services/proyectoService';

function FormularioProyecto({ alGuardar }) {

    const [proyectoData, setProyectoData] = useState({
        titulo: '',
        categoria: '',
        estado: 'Pendiente'
    });

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Como "proyectoData" ya es un objeto, se manda directo
        agregarProyecto(proyectoData);

        setProyectoData({
            titulo: '',
            categoria: '',
            estado: 'Pendiente'
        });

        alGuardar();
    };

    return (
        <section className="contenedor-formulario">
            <h3>Crear Nuevo Proyecto</h3>
            <form onSubmit={manejarEnvio} className="form-crear">
                <div className="input-group">
                    <label>Nombre del proyecto:</label>
                    {/* PERSONA A: Actualiza el value y el onChange para apuntar al objeto */}
                    <input 
                        type="text" 
                        value={proyectoData.titulo} 
                        onChange={(e) => setProyectoData({ ...proyectoData, titulo: e.target.value })} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Tema / Categoría:</label>
                    <input 
                        type="text" 
                        value={proyectoData.categoria} 
                        onChange={(e) => setProyectoData({ ...proyectoData, categoria: e.target.value })} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Estado:</label>
                    <select 
                        value={proyectoData.estado} 
                        onChange={(e) => setProyectoData({ ...proyectoData, estado: e.target.value })}
                    >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>

                <button type="submit" className="btn-crear">Crear Proyecto</button>
            </form>
        </section>
    );
}

export default FormularioProyecto;