import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1 className='titulosPrincipales' >Librería Buenos Aires</h1>

        <nav>
          <ul>
            <li>Venta Online</li>
            <li>Sociedad Literaria</li>
            <li>Sucursales</li>
          </ul>

          <CartWidget />

        </nav>



    </header>
  )
}

export default NavBar