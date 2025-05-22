import { useState, useContext } from 'react'
import './App.css'

import { BrowserRouter } from 'react-router-dom';
import Ruteo from './rutas/Ruteo';
/* <Route parh='/productos/:id/promo:campania element={<DetalleProducto/>}  */

import {CartContext} from './context/CartContext'
import ProductoLista from './estructura/ProductoLista';
import OfertaLista from './estructura/OfertaLista';

function App() {
  const [count, setCount] = useState(0)
  const {cart,productos,error} =useContext(CartContext)

  return (
    <>
      <BrowserRouter>
        <Ruteo />

        <OfertaLista />
        <ProductoLista />
        
        
      </BrowserRouter>
    </>
  )
}

export default App
