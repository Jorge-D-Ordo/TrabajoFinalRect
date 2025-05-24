import React from "react";
import Clima from '../componentes/Clima';

const Aside =()=> {

    return ( 
        <aside style={{ padding: "1rem", }}>
            <h2>Clima actual</h2>
            <Clima />
            <hr />
            <h2>Publicidad</h2>
            <div style={{  padding: "10px", marginTop: "10px" }}>
             {/* Aquí podés agregar banners, imágenes o enlaces más adelante */}
            </div>
        </aside>
    )
}

export default Aside
