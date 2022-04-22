import React from 'react';
import logo1 from './Assets/img/logo3.jpg'
import './NombreTienda.css'

export default function NombreTienda () {
    return (
        <>  
            <div className='titulo'>
                <div className='tituloa'>
                    <img src={logo1} alt='imagen'/>
                </div>
                <div className='titulob'>
                    <h1>Wines</h1>
                </div>
            </div>
        </>
    )
}