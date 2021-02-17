import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



const Usuarios = () => {
    
    const [Usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await res.data
        setUsuarios(users)
    }

    useEffect(() => {
        obtenerUsuarios()
    },[])

    return (
        <div>
            <h1>Listado de usuarios</h1>
            {
                Usuarios.map( (item) => (
                    <div key={item.id}>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Usuarios
