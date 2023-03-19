import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { pedirDatos } from "../../helpers/PedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();
  console.log(categoria);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
        } else {
          setProductos(res);
        }
      })
      .catch((error) => {
        console.log(`Error al traer datos: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);


  return (

    <div className="contenedor_productos">
      {loading ? <h2>...</h2> : <ItemList items={productos} />}
    </div>
  );
};
