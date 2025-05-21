import { createContext, useState, useEffect } from "react";

export const ProductosContext = createContext()
export const ProductosProvider = ({children}) => {
    const [productos,setProductos] = useState([])
    const [listaPrecios,setListaPrecios] = useState([])
    const [productoListaCargado,setProductoListaCargado] = useState(true)
    const [listaPreciosCargado,setListaPreciosCargado] = useState(true)
    const [errorProd,setErrorProd] = useState(false)
    const [errorPrecio,setErrorPrecio] = useState(false)
    const [campaniaActual, setCampaniaActual] = useState("2025-05") /// ojo tengo que ingresar ese parametro

    useEffect(()=>{
        fetch('/datos/listaMillanelProductos.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            setProductos(datos);
            setProductoListaCargado(false);
        })
        .catch((err)=>{
            console.log('Error al cargar Listado de Productos:',err);
            setErrorProd(true);
            setProductoListaCargado(false); 
        });  
    }, []);
    useEffect(()=>{
        fetch('/datos/listaPreciosMillanel.json')
        .then(respuesta1 => respuesta1.json())
        .then(datos1 => {
            setListaPrecios(datos1);
            setListaPreciosCargado(false);
        })
        .catch((err)=>{
            console.log('Error al cargar Lista de Precios:',err);
            setErrorPrecio(true); 
            setListaPreciosCargado(false);
        });  
    }, []);
        
    const productosConPrecioPorCampania = (campania = campaniaActual)  => {
        return productos.map((prod) => {
            const precioEncontrado = listaPrecios.find(
                (precio) =>
                    precio.idProducto === prod.id && precio.idCampania === campania
            );
            return {
                ...prod,
                precio: precioEncontrado ? precioEncontrado.precio : "No disponible",
            };
        });
    };

    return(
        <ProductosContext.Provider value ={{
            productos,listaPrecios,productosConPrecioPorCampania,
            productoListaCargado,listaPreciosCargado,
            errorProd,errorPrecio,
            campaniaActual
            }}>    
            {children}        
        </ProductosContext.Provider>
    )
} 

