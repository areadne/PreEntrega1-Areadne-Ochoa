import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Item = ({item}) => {

    return(
        <article className="contenedor_articulo">

        <h5 className='titulo_del_producto'>{item.producto}</h5>
        <img src={item.imagen} className="hola" alt="foto_acido_hialuronico"></img>
        <p>Precio {item.precio}</p>
        
        <Link to={`/producto/${item.id}`} className='btn btn-primary'>Detalle</Link>
  
      </article>
    )


}