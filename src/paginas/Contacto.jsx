import React from "react";
import Header from '../estructura/Header';
import Footer from "../estructura/Footer";
import Aside from "../estructura/Aside";

const Contacto=()=> {
    return ( 
        <>
            
            <Header />
            <div style={{paddingTop: '115px'}} >    
                <h1>Contactos</h1>
                <h2>Podras consutar tus dudas </h2>
            </div>  
            <div style={{ display: 'flex' }}>
                <main style={{ flex: 3 }}>
                    

                    
                    
                </main>
                <Aside style={{ flex: 1 }} />
            </div>






            <Footer />
        </>
    )
}

export default Contacto;
