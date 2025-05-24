import React from 'react'

const Botones = ({texto, color, onClick}) => {
    let estilo = {
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        width: '100px',
        cursor: 'pointer',
        margin: '0 5px',
    }

    return (
        <button style={estilo} onClick={onClick}>{texto}</button>
    );
};

export default Botones;
