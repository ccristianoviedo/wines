import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'

const ItemCount=(props)=>{
   if (props.contador1<props.stock){  
            if(props.contador1>=1 && props.stock>=1){
                return(
                    <>
                    <button onClick={props.restar1} className="btn btn-secondary">RESTAR</button>
                    <button onClick={props.sumar1} className="btn btn-secondary">COMPRAR</button>
                    <button onClick={props.reset} className="btn btn-secondary">ANULAR</button>
                    <h3>{props.contador1}</h3>
                    </>
                )
            }else if (props.contador1<=1 && props.stock>=1){
                return(
                    <>  <button onClick={props.sumar1} className="btn btn-secondary">COMPRAR</button>            
                        <h3>{props.contador1}</h3>
                    </>
                )  
            }       
    } else if (props.stock<=0){
        return(
            <>              
                <h3>SIN STOCK!</h3>
            </>
        )
    } 
    else return(
        <>  <button onClick={props.restar1} className="btn btn-secondary">RESTAR</button>
            <button className="btn btn-secondary">AGREGAR A CARRITO</button>           
            <h3>{props.contador1}</h3>
        </>
    )  
}
export default ItemCount;