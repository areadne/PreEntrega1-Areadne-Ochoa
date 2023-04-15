import { useContext } from "react";
import logo from "../../assets/imgs/Carrito-de-compras.jpg";
import "./CartWidget.css";
import { contextoCarrito } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalCantidad } = useContext(contextoCarrito);

  return (
    <Link to="/cart" className="contenedor_carrito">
      <img src={logo} className="logo_carrito" alt="logo_carrito"></img>
      <div className="numero_en_carrito">{totalCantidad()}</div>
    </Link>
  );
};
