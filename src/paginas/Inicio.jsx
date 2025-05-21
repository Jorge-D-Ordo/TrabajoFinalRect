import React from "react";
import Header from '../estructura/Header';
import Footer from "../estructura/Footer";
import Aside from "../estructura/Aside";
import Clima from '../componentes/Clima';


const Inicio=()=> {
    return ( 
        <>
            
            <Header /> 

            <div style={{ display: 'flex',paddingTop: "115px" }}>
                <main style={{ flex: 3 }}>
                    
                    <h1>Bienvenido a Fragancias Argentinas</h1>
                    <h2>Perfumes Millanel (Perfumes propios y alternativas olfativas) </h2>

                </main>
                <Aside style={{ flex: 1 }} />
            </div>




            <Footer />
        </>
    )
}

export default Inicio;
