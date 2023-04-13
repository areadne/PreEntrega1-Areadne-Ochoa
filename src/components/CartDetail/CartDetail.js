import { useContext } from "react";
import { contextoCarrito } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartDetail.css";

// import { Item } from '../Item/Item'

export const CartDetail = () => {
  const { cart, vaciarCarrito, removerItem, totalCarrito } =
    useContext(contextoCarrito);

  //   const removerItem = (item) => {
  //     setCart(cart.splice(item, 1))
  //     console.log(cart)
  //   }

  return (
    <div className="div-carrito-compras">
      <h2>Productos en tu carrito</h2>
      <hr />
      <div className="contenedor-articulos-del-carrito">

      {cart.map((item) => (
        <article key={item.id} >
        <div className="articulo-en-carrito">

          <h3>{item.producto}</h3>
          <img
            src={item.imagen}
            className="imagen_producto_carrito"
            alt="foto"
          ></img>
          <h5 className="precio">Precio CLP {item.precio}</h5>
          <p>Cantidad: {item.contador}</p>
          {item.contador > 1 ? (
            <p>Subtotal articulo: {item.contador * item.precio}</p>
          ) : (
            <p></p>
          )}

          <button
            className="btn btn-primary"
            onClick={() => removerItem(item.id)}
          >
            Remover
          </button>

        </div>
        </article>
      ))}

      </div>

      <hr />

      <h4>TOTAL COMPRA: {totalCarrito()}</h4>

      <hr />
      <div>
        <button className="btn btn-primary" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="terminar-compra">
          <button className="btn btn-primary">Terminar Compra</button>
        </Link>
      </div>
    </div>
  );
};
