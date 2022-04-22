import CartWidget from './Landing/cartWidget'
import'./NavBar.css'

export default function NavBar (){
    return(
        <>
        <div className='navbar'>
            <ul className='navBarUl'>
                <li className='navBarIl'><a href='https://www.google.com/'>INICIO</a></li>
                <li className='navBarIl'><a href='https://www.google.com/'>TIENDA</a></li>
                <li className='navBarIl'><a href='https://www.google.com/'>PROMOCIONES</a></li>
                <li className='navBarIl'><a href='https://www.google.com/'>RECOMENDACIONES</a></li>
                <li className='navBarIl'><a href='https://www.google.com/'>QUIENES SOMOS</a></li>
                <li className='navBarCart'><CartWidget/></li>                  
            </ul>
        </div>
        </>
    )
}
