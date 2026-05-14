import React, { useState } from 'react';
import { agregarProyecto } from '../services/proyectoService';

function FormularioProyecto({ alGuardar }) {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [estado, setEstado] = useState('Pendiente');

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nuevoProyecto = {
            titulo,
            categoria,
            estado
        };

        agregarProyecto(nuevoProyecto);

        setTitulo('');
        setCategoria('');
        setEstado('Pendiente');

        alGuardar();
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
                        onChange={(e) => setTitulo(e.target.value)} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Tema / Categoría:</label>
                    <input 
                        type="text" 
                        value={categoria} 
                        onChange={(e) => setCategoria(e.target.value)} 
                        placeholder="..." 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Estado:</label>
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
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