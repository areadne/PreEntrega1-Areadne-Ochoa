import { Link } from "react-router-dom"
import alerta from '../../assets/imgs/alerta.png'
import './CartEmpty.css'


export const CartEmpty = () => {

    return(
        <div className="contenedor-carrito-vacio">

        <h4 className="texto-carrito-vacio">Aún no tienes productos agregados al carrito</h4>
        <img src={alerta} className='icono-alerta' alt='alerta'></img>

        <h4 className="texto-carrito-vacio">¡Agrégalos aquí!</h4>

        <Link to='/'>
        <button className="btn btn-primary">Ver Productos</button>
        </Link>

        </div>
    )
}