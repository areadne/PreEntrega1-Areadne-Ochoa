import Spinner from "react-bootstrap/Spinner";
import './MuestraSpinner.css'

export const MuestraSpinner = () => {
  return (
    <div className="contenedor-spinner">
      <h4>Cargando</h4>
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};
