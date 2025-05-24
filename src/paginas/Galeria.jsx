import React from "react";
import Header from '../estructura/Header';
import ProductoLista from '../estructura/ProductoLista';
import Footer from "../estructura/Footer";
import Aside from "../estructura/Aside";

const Galeria=()=> {
    return ( 
        <>            
            <Header />
            <div style={{paddingTop: '115px'}} >   
                <h1>Nuestra Lista de fragancias </h1>
            </div>             
            <div style={{ display: 'flex' }}>
                <main style={{ flex: 3 }}>
                    
                    
                    <ProductoLista />
                </main>
                <Aside style={{ flex: 1 }} />
            </div>
            <Footer />
        </>

    )
}

export default Galeria;