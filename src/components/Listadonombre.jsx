import React, { useState } from 'react';
import uniqid from 'uniqid'

const Listadonombre = () => {

    const [nombre, setNombre] = useState('')
    const [listanombres, setListanombres] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo nombre esta vacío')
            return 
        }
        const nuevoNombre = {
            id: uniqid(),
            name: nombre
        }
        setListanombres([...listanombres,nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteNombre = (id) => {
        const nuevoArray = listanombres.filter(item => item.id !== id)
        setListanombres(nuevoArray)
    }

    const editNombre = (item) => {
        setEditMode(true)
        setNombre(item.name)
        setId(item.id)
    }

    const updateNombre = (e) => {
        e.preventDefault()
        const nuevoArray = listanombres
            .map( item => item.id === id ? {id: id, name: nombre}: item)
        setListanombres(nuevoArray)
        setEditMode(false)
        setNombre('')
    }


    return (
        <div>
            <h2>Aplicación de CRUD Básica</h2>
            <div className="row">
                <div className="col">
                    <h3>LIstado de Nombres</h3>
                    <ul className="list-group">
                        {
                            listanombres.map(item => 
                                <li  
                                    key={item.id} 
                                    className="list-group-item">{item.id} - {item.name}
                                     <button 
                                        onClick={ () => {editNombre(item)}}
                                        className="btn btn-info float-right ml-2"
                                        >
                                            Editar
                                    </button>
                                    <button 
                                        onClick={ () => {deleteNombre(item.id)}}
                                        className="btn btn-danger float-right"
                                        >
                                            Eliminar
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>Formulario para añadir nombres</h3>
                    <form className="form-group" onSubmit={editMode ? updateNombre : addNombre}>
                        <input 
                            onChange={(e) => {setNombre(e.target.value)}}
                            type="text" 
                            placeholder="Ingrese nombre" 
                            className="form-control mb-3"
                            value={nombre}
                        />
                        <input 
                            type="submit" 
                            value={editMode ? 'Editar Nombre' : 'Registrar nombre'}
                            className="btn btn-info btn-block"/>
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Listadonombre;