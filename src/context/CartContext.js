import { createContext } from "react";
import { useState } from "react";

export const contextoCarrito = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.contador, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const removerItem = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));
  };

  const totalCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.contador * prod.precio, 0);
  };

  return (
    <contextoCarrito.Provider
      value={{
        cart,
        totalCantidad,
        vaciarCarrito,
        setCart,
        removerItem,
        totalCarrito,
      }}
    >
      {children}
    </contextoCarrito.Provider>
  );
};
