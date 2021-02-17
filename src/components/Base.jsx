import React, {useState, useEffect} from 'react'

const Base = () => {

    const [Nombre, setNombre] = useState('Pedro')
    useEffect(() => {
        setTimeout(() => {
            setNombre('Manuel')
        },3000)
    })


    return (
        <div>
            <h1>Página base</h1>
            <p>{Nombre}</p>
        </div>
    )
}

export default Base
