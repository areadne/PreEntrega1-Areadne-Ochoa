import { useContext } from "react";
import { contextoCarrito } from "../../context/CartContext";
import { CartDetail } from '../CartDetail/CartDetail'
import { CartEmpty } from "../CartEmpty/CartEmpty";

export const Cart = () => {
  const { totalCarrito } = useContext(contextoCarrito);
 
  return (
    <div className="div-carrito-compras">
      <hr/>
      {

        totalCarrito() === 0
      ? <CartEmpty/>
      : <CartDetail/>

      }

    
      <hr/>

    </div>
  );
};
