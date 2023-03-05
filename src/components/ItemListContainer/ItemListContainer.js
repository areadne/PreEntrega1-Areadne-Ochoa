import "./ItemListContainer.css";
import { Button } from "react-bootstrap";
import Acido_Hialuronico from '../../assets/imgs/Acido_Hialuronico.jpg'

export const ItemListContainer = ({ saludo }) => {
  return (

    <article className="contenedor_articulo">

      <h5 className='titulo_del_producto'>{saludo}</h5>
      <img src={Acido_Hialuronico} className="Acido_Hialuronico" alt="foto_acido_hialuronico"></img>
      <p>10.000 CLP</p>
      
      <Button variant="dark">Agregar</Button>

    </article>

  );
};
