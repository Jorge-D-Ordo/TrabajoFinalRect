import React, { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import TarjetaProducto from '../componentes/TarjetaProducto';

const ProductoLista = () => {
    const {
        productosConPrecioPorCampania,
        productoListaCargado,
        listaPreciosCargado,
        errorProd,
        errorPrecio,
        campaniaActual,
    } = useContext(ProductosContext);

    const campania = "2025-05"; // <SI POR AHORA USAR EL VALOR FIJO si es admin puede cambiar el valor

    const productosConPrecio = productosConPrecioPorCampania(campania);

    if (productoListaCargado || listaPreciosCargado) return <p>Cargando...</p>;
    if (errorProd || errorPrecio) return <p>Error al cargar datos.</p>;

/************************************************************************************************************ */
    let estContenedor ={
        backgroundColor: 'red', 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between',        
        padding: '20px',
        alignItems: 'stretch',  
    }
    let estiloTarjeta = { 
        flex: '0 0 32%',
        boxSizing: 'border-box', 
        padding: '10px', 
        height: '560px',    
};

    return (
        <>
            <h1>Productos - Campaña {campaniaActual}</h1>
            <div style={estContenedor}> {
                    productosConPrecio.map((producto) => (
                        <div style={estiloTarjeta} key={producto.id}> 
                            <TarjetaProducto producto={producto} />    
                        </div>              
                ))}
            </div>
        </>
    );
};

export default ProductoLista;