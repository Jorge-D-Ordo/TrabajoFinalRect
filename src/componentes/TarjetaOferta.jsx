import React, { useState, useContext, useEffect } from "react";
import BotonesCantidad from './BotonesCantidad';
import { CarritoContext } from '../context/CarritoContext';


const TarjetaOferta = ({ producto }) => {
    const { carrito,  modifCantCarrito, cantProdEnCarrito} = useContext(CarritoContext);  
    
    const cantidadInicial = cantProdEnCarrito ? cantProdEnCarrito(producto.id) : 0;

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        const cantidadActualizada = cantProdEnCarrito(producto.id);
        setCantidad(cantidadActualizada);
    }, [carrito, producto.id]);

    const manejarCambioCantidad = (valor) => {
        setCantidad(valor);
    };

    const agregarModifCantCarritoProducto = () => {
        modifCantCarrito(producto, cantidad);
    };
/************************************************************************************************************ */
    let estTarjeta ={
        backgroundColor: 'white', 
        boxShadow : '0 2px 8px rgba(0,0,0,0.1)',
        padding: '20px',  
        display: 'flex', 
        //flexDirection: 'column', 
        alignItems: 'center',
        transition:'box-shadow 0.3s ease',
    }
    let estContenedor={
        backgroundColor: 'green', 
        width:'100%',
        hight:'100px',
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        display: 'flex', 
        overflow:'hidden',
        marginBotton:'12px',
        alignItems:'center',
        justifyContent:'center',
    }
    let estImagen ={
        width:'300px',
        hight:'300px',
        objectFit: 'cover',
    }
    let estNombre ={
        fontSize:'18px',
        fontWeight:'600',
        color : 'blue',
        marginBotton: '4px',
        textAlign:'center',
    }
    let estParrafo ={
        fontSize:'12px',
        color : 'black',
        marginBotton: '4px',
        textAlign:'center',
    }
    let estPrecio ={
        fontSize:'16px',
        fontWeight:'600',
        color : 'red',
        marginBotton: '4px',
        textAlign:'center',
    }
    let estStock ={
        fontSize:'12px',
        color : 'yelow',
        marginBotton: '12px',
        textAlign:'center',
    }
    let estContainerCant ={
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
            <div style={estImagen}>
                    <img src={`/datos/millanelProductos/${producto.imagen1}`} alt="Foto del producto" style={estImagen}/>
            </div>
            <div>
                <h3 style={estNombre}>{producto.nombre}</h3>

                <p style={estParrafo}>{producto.Linea}</p>
                <p style={estParrafo}>{producto.descripcion}</p>
                <p style={estParrafo}>{producto.familia}</p>
                <p style={estParrafo}>{producto.notas}</p>
                <p style={estParrafo}>{producto.presentacion}</p>               
                <p style={estParrafo}>{producto.inspiracion}</p>

                <p style={estPrecio}>$ {producto.precio.toLocaleString('es-AR')}</p>
                <p style={estStock}>Stock: {producto.stock}</p>

                <div style={estContainerCant}>
                    <BotonesCantidad stock={producto.stock} valorInicial={cantidad} onCantidadCambio={manejarCambioCantidad} />
                </div>
                <button onClick={agregarModifCantCarritoProducto}>Enviar al carrto</button>
            </div>
        </section>

    );
};

export default TarjetaOferta;