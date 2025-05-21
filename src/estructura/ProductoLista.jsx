import React, { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";

const ProductoLista = () => {
    const {
        productosConPrecioPorCampania,
        productoListaCargado,
        listaPreciosCargado,
        errorProd,
        errorPrecio,
        campaniaActual,
    } = useContext(ProductosContext);

    const campania = "2025-05"; // <SI POR AHORA USAR EL VALOR FIJO

    const productosConPrecio = productosConPrecioPorCampania(campania);


    if (productoListaCargado || listaPreciosCargado) return <p>Cargando...</p>;
    if (errorProd || errorPrecio) return <p>Error al cargar datos.</p>;

    return (
        <>
            <h1>Productos - Campaña {campaniaActual}</h1>
            <ul>
                {productosConPrecio.map((p) => (
                <li key={p.id}>
                    id : {p.id} nombre : {p.nombre} Precio: ${p.precio}
                </li>
                ))}
            </ul>
        </>
    );
};

export default ProductoLista;