import { Routes, Route, Outlet } from 'react-router-dom';


import Inicio from '../paginas/Inicio';
import Galeria from '../paginas/Galeria';
import ErrorPagina from '../paginas/ErrorPagina';
import Nosotros from '../paginas/Nosotros';
import Contacto from '../paginas/Contacto';
import UsuarioLogin from '../paginas/UsuarioLogin';
import Carrito from '../paginas/Carrito';


function Ruteo() {
    return (
        <Routes>
            <Route path="/"             element={<Inicio />} />
            <Route path="Galeria"       element={<Galeria />} />
            <Route path="Nosotros"      element={<Nosotros />} />
            <Route path="contacto"      element={<Contacto />} />
            <Route path="Carrito"       element={<Carrito />} />
            <Route path="UsuarioLogin"  element={<UsuarioLogin />} />
            <Route path="*"             element={<ErrorPagina />} />           
        </Routes>
    );
};

export default Ruteo;
