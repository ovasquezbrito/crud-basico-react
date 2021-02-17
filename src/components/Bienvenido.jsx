import React from 'react';

const Bienvenido = (props) => {
    const {nombre} = props
    return (
        <div>
            <h4>Bienvenido {nombre}</h4>
        </div>
    );
}

export default Bienvenido;