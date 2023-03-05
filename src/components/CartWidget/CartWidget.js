import logo from '../../assets/imgs/Carrito-de-compras.jpg'
import './CartWidget.css'

export const CartWidget = () => {
    return(
        
        <div className="contenedor_carrito">
        
            <img src={logo} className="logo_carrito" alt='logo_carrito'></img>
            <div className="numero_en_carrito">0</div>

        </div>

    )
}