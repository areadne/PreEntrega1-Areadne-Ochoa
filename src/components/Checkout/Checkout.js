import "./Checkout.css";
import { Formulario } from "../Formulario/Formulario";

export const Checkout = () => {
  return (
    <div className="checkout">
      <hr />
      <h2>Ingresa tus datos para finalizar la compra</h2>
      <hr />
      <Formulario />
    </div>
  );
};
