import React, {  useState, useEffect} from 'react';

const BotonesCantidad = ({onCantidadCambio,stock=0,valorInicial  }) => {
    const [contador, setContador] = useState(valorInicial);
    
    useEffect(() => {
        setContador(valorInicial);
    }, [valorInicial]);
    
    useEffect(() => {
        onCantidadCambio(contador);
    }, [contador]);    

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }    
    };
    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
/************************************************************************************************************ */
    let estContenedor = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    let estCantBoton ={
        backgroundColor: 'rgb(219, 117, 117)', 
        border:'none',
        padding: '6px 12px',
        borderRadius: '4px', 
        fontSize:'18px',
        fontWeight:'600',
        cursor:'pointer',
        transition:'background-color 0.2s',
        color: 'white',
        margin: '0 5px',
    }
    let estContador ={
        margin: '0 10px',
    }


    return (
        <div style={estContenedor}>
            <button style={estCantBoton}  onClick={(e) => { e.stopPropagation(); decrementar(); }}>-</button>
            <span style={estContador}>{contador}</span>
            <button style={estCantBoton}  onClick={(e) => { e.stopPropagation(); incrementar(); }}>+</button>
        </div>
    );
};

export default BotonesCantidad;
