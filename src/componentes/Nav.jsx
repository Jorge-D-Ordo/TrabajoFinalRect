import React from "react";
import { Outlet, Link } from 'react-router-dom';
import carrito from '../assets/img/iconos/CarritoCompras1.svg';

const Nav =()=> {

    let estiloNav = {
        backgroundColor:"#ea98ff", 
        color:'black', 
        border:'none', 
        padding:'5px',
        paddingTop:'15px'        
        }
    let estilo = {
        listStyle: 'none', 
        display:'flex', 
        justifyContent:'space-evenly', 
        margin:'0', 
        aliggnItms :'center', 
        fontSize : '28px',
        }    
    let estiloLink = {
        color: 'black', 
        textDecoration:'none', 
        fontSize: '25px'
        } 
    let estiloIco = {
        width: '28px',
        height: 'auto',
        marginLeft: '10px',
        cursor: 'pointer'
        }
        
    return (
        <nav  style={estiloNav}>
            <ul style={estilo} >
                <li><Link to="/"                style={estiloLink}>Ofertas</Link></li>
                <li><Link to="/Galeria"         style={estiloLink}>Productos</Link></li>
                <li><Link to="/Nosotros"        style={estiloLink}>Nosotros</Link></li>
                <li><Link to="/Contacto"        style={estiloLink}>Contacto</Link></li>
                <li><Link to="/UsuarioLogin"    style={estiloLink}>Cuenta</Link></li>
                <li> 
                    <Link to="/Carrito">
                        <img src={carrito}  style={estiloIco} alt="logo del carrito de compras" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};


export default Nav;