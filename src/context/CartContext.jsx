import { createContext, useState, useEffect } from "react";
export const CartContext = createContext()
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de carga de productos
    try {
      // Aquí podrías cargar productos de una API, por ejemplo
      setProductos([{ id: 1, nombre: "Producto 1" }, { id: 2, nombre: "Producto 2" }]);
    } catch (e) {
      setError("Hubo un error al cargar los productos");
    }
  }, []);






    return(
        <CartContext.Provider value ={{cart,productos,error}}>    
            {children}        
        </CartContext.Provider>
    )
}