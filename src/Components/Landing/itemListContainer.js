import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getProductos} from '../BaseDeDAtos/ItemList'
import Item from './item';

const ItemListContainer=()=>{    
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);  

    useEffect(() => {
        setCargando(true)
        getProductos().then((data) => {setProductos(data)})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setCargando(false))        
    },[])
    
    return(
        <>
           {cargando ? (<h2>Cargando.......</h2>):(productos.map((productos)=>(
            <Item productos={productos} key={productos.id}/>)))                      
           }      
        </>
    )
}
export default ItemListContainer;   