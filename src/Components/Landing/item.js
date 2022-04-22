import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';

const Item=({productos})=>{
    const [contador1, setContador1] = useState(1);   
    const sumar1=()=>setContador1(contador1+1)
    const restar1=()=>setContador1(contador1-1)
    const reset=()=>setContador1(0)  
    return (
        <div className='itemContainer'>
            <img src={productos.img} alt={productos.name} className='imgLanding'/>        
            <p>BODEGA:{productos.name}</p>
            <p>PRECIO: $ {productos.price}</p>
            <p>{productos.descripcion}</p>
            <p>STOCK: {productos.stock}</p>
            <p>CODIGO:{productos.id}</p>
            <ItemCount reset={reset} sumar1={sumar1} restar1={restar1} contador1={contador1} stock={productos.stock}/>
        </div>
    ) 
}
export default Item;
