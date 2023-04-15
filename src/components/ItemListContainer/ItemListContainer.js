import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MuestraSpinner } from "../../helpers/MuestraSpinner";


export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <div className="contenedor_productos">
      {loading ? <MuestraSpinner /> : <ItemList items={productos} />}
    </div>
  );
};
