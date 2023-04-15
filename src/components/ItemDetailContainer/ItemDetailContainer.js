import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MuestraSpinner } from "../../helpers/MuestraSpinner";

const MySwal = withReactContent(Swal);

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", idProducto);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setItem({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          MySwal.fire({
            title: <strong>ERROR</strong>,
            html: <i>El producto indicado no existe</i>,
            icon: "error",
          });
        }
      })
      .finally(() => setLoading(false));
  }, [idProducto]);

  return <div>{loading ? <MuestraSpinner /> : <ItemDetail item={item} />}</div>;
};
