import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Usuario = () => {
    console.log('que pasa')
    const [User, setUser] = useState([])
    const {id} = useParams()
    console.log(id)
    const obtenerUsuario = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.data
        console.log(user)
        setUser(user)
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])
    return (
        <div className="container">
            <p>Nombre: {User.name}</p>
            <p>Email: {User.email}</p>
        </div>
    )
}

export default Usuario
