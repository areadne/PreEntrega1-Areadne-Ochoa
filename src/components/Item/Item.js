import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'

export const Item = ({item}) => {

    return(
        <article className="contenedor_articulo">

        <h5 className='titulo_del_producto'>{item.producto}</h5>
        <img src={item.imagen} className="foto-producto" alt="foto"></img>
        <p>Precio {item.precio}</p>
        
        <Link to={`/producto/${item.id}`} className='btn btn-primary'>Detalle</Link>
  
      </article>
    )


}