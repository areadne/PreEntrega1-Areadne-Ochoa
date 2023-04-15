import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemDetail.css";
import { contextoCarrito } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { cart, setCart } = useContext(contextoCarrito);
  const [contador, setContador] = useState(1);

  const sumarClick = () => {
    setContador(contador + 1);
  };

  const restarClick = () => {
    if (contador === 1) {
      setContador(1);
    } else {
      setContador(contador - 1);
    }
  };

  const handleAgregar = () => {
    let consultaCarrito = cart.find((e) => e.id === item.id);
    if (consultaCarrito) {
      for (const producto of cart) {
        if (producto.id === item.id) {
          producto.contador = producto.contador + contador;
        }
      }
      setCart([...cart]);
    } else {
      const nuevoItem = {
        ...item,
        contador,
      };
      setCart([...cart, nuevoItem]);
    }
  };

  return (
    <article className="contenedor_articulo_ItemDetail">
      <img
        src={item.imagen}
        className="imagen_producto_ItemDetail"
        alt="foto"
      ></img>
      <h4 className="titulo_del_producto_ItemDetail">{item.producto}</h4>
      <p className="texto_descripcion">{item.desciption}</p>
      <h4 className="precio">Precio CLP {item.precio}</h4>

      <div className="botones-contador">
        <button onClick={restarClick} className="btn btn-primary">
          -
        </button>
        <h4>{contador}</h4>
        <button onClick={sumarClick} className="btn btn-primary">
          +
        </button>
      </div>

      <Button className="btn btn-primary" onClick={handleAgregar}>
        Agregar al carrito
      </Button>
    </article>
  );
};
