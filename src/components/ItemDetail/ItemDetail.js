import { Button } from 'react-bootstrap'
import './ItemDetail.css'

export const ItemDetail = ( {item} ) => {

    return(

      <article className="contenedor_articulo_ItemDetail">
        <h3 className='titulo_del_producto_ItemDetail'>{item.producto}</h3>
        <img src={item.imagen} className="imagen_producto_ItemDetail" alt="foto_acido_hialuronico"></img>
        <p className='texto_descripcion'>{item.desciption}</p>
        <h4 className='precio'>Precio CLP {item.precio}</h4>
        <Button variant="dark">Agregar al carrito</Button>
      </article>
      
    )
}
