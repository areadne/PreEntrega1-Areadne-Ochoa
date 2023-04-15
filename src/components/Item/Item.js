import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <article className="contenedor_articulo">

      <Link to={`/producto/${item.id}`} >
      <img src={item.imagen} className="foto-producto" alt="foto"></img>
      </Link>
      <h6 className="titulo_del_producto">{item.producto}</h6>
      <p>Precio {item.precio}</p>

      <Link to={`/producto/${item.id}`} className="btn btn-primary">
        Detalle
      </Link>
    </article>
  );
};
