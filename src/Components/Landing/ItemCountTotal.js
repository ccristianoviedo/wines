import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'



const ItemCountTotal=(props)=>{
    return(
        <>
        <button onClick={props.sumar} className="btn btn-secondary">COMPRAR</button>
        <button onClick={props.restar} className="btn btn-secondary">RESTAR</button>
        <p>{props.contador}</p>
        </>
    )
}

export default ItemCountTotal;
