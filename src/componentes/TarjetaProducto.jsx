import React from "react";




const TajetaProducto = ({ producto }) => {
    let estTarjeta ={
        backgroundColor: 'cyan', 
        boxShadow : '0 2px 8px rgba(0,0,0,0.1)',
        padding: '20px',  
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        transition:'box-shadow 0.3s ease',
        height: '100%',
        boxSizing: 'border-box',
    };
    let estContenedor={
        backgroundColor: 'green', 
        width:'100%',
        height:'100%',
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        display: 'flex', 
        overflow:'hidden',
        marginBottom:'12px',
        alignItems:'center',
        justifyContent:'center',
    }
    let estImagen ={
        //width:'100%',
        height:'150px',
        overflow: 'hidden',
        objectFit: 'cover',
        marginBottom: '8px',
    }
    let estNombre ={
        fontSize:'18px',
        fontWeight:'600',
        color : 'blue',
        marginBottom: '7px',
        textAlign:'center',
        flexGrow: '1',
    }
    let estParrafo ={
        fontSize:'12px',
        color : 'black',
        marginBottom: '4px',
        textAlign:'center',
        flexGrow: '1',
    }
    let estTexto ={
        fontSize:'12px',
        color : 'black',
        marginBottom: '4px',
        textAlign:'center',
    }
    let estPrecio ={
        fontSize:'16px',
        fontWeight:'600',
        color : 'red',
        marginBottom: '4px',
        textAlign:'center',
    }
    let estStock ={
        fontSize:'12px',
        color : 'yellow',
        marginBottom: '12px',
        textAlign:'center',
    }
    let estContainerCant ={
        backgroundColor: 'cyan', 
        alignItems:'center',
        gap:'8px',
        marginBottom:'16px',
        alignItems:'center',
    }
    let estCantBoton ={
        backgroundColor: 'red', 
        border:'none',
        padding: '6px 12px',
        borderRadius: '4px', 
        fontSize:'18px',
        fontWeight:'600',
        cursor:'pointer',
        transition:'background-color 0.2s',

    }

    return (
        <section style={estTarjeta}>

            <h3 style={estNombre}>{producto.nombre}</h3>

            <div style={estImagen}>
                    <img src={`datos/millanelProductos/${producto.imagen1}`} alt="Foto del producto" style={estImagen}/>
            </div>

            <p style={estTexto}>{producto.familia}</p>
            <p style={estParrafo}>{producto.notas}</p>
            <p style={estTexto}>{producto.inspiracion}</p>
            <p style={estTexto}>{producto.presentacion}</p>
            <p style={estPrecio}>{producto.precio}</p>
            <p style={estStock}>{producto.stock}</p>

            <div style={estContainerCant}>
                <button style={estCantBoton}>-</button>
                <span>s/d</span>
                <button style={estCantBoton}>+</button>
            </div>
            <button>agregar al carrto</button>
        </section>

    )
};

export default TajetaProducto;