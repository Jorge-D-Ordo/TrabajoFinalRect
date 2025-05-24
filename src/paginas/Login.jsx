import React , { useContext }from "react";
import Header from '../estructura/Header';
import Footer from "../estructura/Footer";
import { CarritoContext } from "../context/CarritoContext";




const Login = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(CarritoContext);

    const permutar = () => {
        setIsAuthenticated(!isAuthenticated);
    };


    return (
        <>
            
            <main style={{ paddingTop: '115px', textAlign: 'center' }}>
                <h1>Login</h1>
                <h2>{isAuthenticated ? "✅ Estás logueado" : "❌ No estás logueado"}</h2>

                <button onClick={permutar}>
                    {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
                </button>
            </main>
            <Footer />
        </>
    );
};

export default Login;
