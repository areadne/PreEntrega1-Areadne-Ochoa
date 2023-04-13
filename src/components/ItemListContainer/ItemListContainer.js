import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { pedirDatos } from "../../helpers/PedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { contextoCarrito } from "../../context/CartContext";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../firebase/config";


export const ItemListContainer = () => {

  const prueba = useContext(contextoCarrito)
  console.log(prueba)

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();
  console.log(categoria);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos")
    const q = categoria
                ? query(productosRef, where("categoria", "==", categoria))
                : productosRef

    getDocs(q)
      .then((res) => {
        setProductos(res.docs.map((doc) => 
        {return {
          id: doc.id,
          ...doc.data()
        }}))

      
      }).finally(() => setLoading(false))




    // pedirDatos()
    //   .then((res) => {
    //     if (categoria) {
    //       setProductos(res.filter((prod) => prod.categoria === categoria));
    //     } else {
    //       setProductos(res);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(`Error al traer datos: ${error}`);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [categoria]);


  return (

    <div className="contenedor_productos">
      {loading ? <h2>...</h2> : <ItemList items={productos} />}
    </div>
  );
};
