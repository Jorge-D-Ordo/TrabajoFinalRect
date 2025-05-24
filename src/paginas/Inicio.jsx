import React from "react";
import Header from '../estructura/Header';
import OfertaLista from '../estructura/OfertaLista';
import Footer from "../estructura/Footer";
import Aside from "../estructura/Aside";



const Inicio=()=> {





    return ( 
        <>            
            <Header /> 
            <div style={{paddingTop: '115px'}} >   
                <h1>Bienvenido a Fragancias Argentinas</h1>
                <h2>Perfumes Millanel (Perfumes propios y alternativas olfativas) </h2>
            </div>

            <div style={{ display: 'flex' }}>
                <main style={{ flex: 3 }}>
                    

                    <OfertaLista />
                </main>
                <Aside style={{ flex: 1 }} />
            </div>
            <Footer />
        </>
    )
}

export default Inicio;
