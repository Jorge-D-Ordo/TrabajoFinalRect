import React, { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import TarjetaOferta from '../componentes/TarjetaOferta';

const OfertaLista = () => {

    let estContenedor ={
        backgroundColor: 'black', 
        display: 'flex', 
        flexDirection: 'column', 
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
    let estiloTarjeta = {
        boxSizing: 'border-box', 
        padding: '10px 20px', 
};
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
    console.log("**********************************");
    console.log(productosConPrecioPorCampania(campania));
    console.log("**********************************");

    if (productoListaCargado || listaPreciosCargado) return <p>Cargando...</p>;
    if (errorProd || errorPrecio) return <p>Error al cargar datos.</p>;

    console.log("+++++++++++++++++++++++++++++");
    console.log(productosConPrecio);
    console.log("+++++++++++++++++++++++++++++");

    const productosFiltados = productosConPrecio.filter (
        (producto) => producto.stock >= 1 && producto.oferta === true
    );
    console.log("-----------------------------");
    console.log("Productos filtrados (oferta con stock):",productosFiltados);    
    console.log("-----------------------------");
    return (
        <>
            <h1>Productos - Campaña {campaniaActual}</h1>
            <div style={estContenedor}>
                {
                    productosFiltados.map((producto) => (
                        <div style={estiloTarjeta} key={producto.id}> 
                            <TarjetaOferta producto={producto} />    
                        </div>              
                ))}
            </div>
        </>


    );
};

export default OfertaLista;