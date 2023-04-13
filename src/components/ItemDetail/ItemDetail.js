import { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
// import { Item } from '../Item/Item'
import './ItemDetail.css'
import { contextoCarrito } from "../../context/CartContext";


export const ItemDetail = ( {item} ) => {
  const { cart, agregarACarrito } = useContext(contextoCarrito)

  const [contador, setContador] = useState(1)
  console.log(cart)

  const sumarClick = () => {
    setContador( contador + 1 )
  }

  const restarClick = () => {
    if (contador === 0) {
      setContador(0)
    }else{
      setContador( contador - 1 )
    }
  }

  // const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
    const nuevoItem = {
      ...item,
      contador
    }
    // console.log(nuevoItem)
    // console.log(cart)
    // console.log(contador)
    // setCart([...cart, nuevoItem])
    agregarACarrito(nuevoItem)

  }

  
  console.log(cart)


    return(

      <article className="contenedor_articulo_ItemDetail">
        <h3 className='titulo_del_producto_ItemDetail'>{item.producto}</h3>
        <img src={item.imagen} className="imagen_producto_ItemDetail" alt="foto_acido_hialuronico"></img>
        <p className='texto_descripcion'>{item.desciption}</p>
        <h4 className='precio'>Precio CLP {item.precio}</h4>

        <div className='botones-contador'>
        <button onClick={restarClick} className="btn btn-primary">-</button>
        <h4>{contador}</h4>
        <button onClick={sumarClick} className="btn btn-primary">+</button>
        </div>

        <Button className='btn btn-primary' onClick={handleAgregar}>Agregar al carrito</Button>
      </article>
      
    )
}
