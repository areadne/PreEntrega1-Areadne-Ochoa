import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { contextoCarrito } from "../../context/CartContext";
import { writeBatch, collection, addDoc, where, documentId, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Formulario.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import check from "../../assets/imgs/Green-Check-Transparent.png";

const MySwal = withReactContent(Swal);

export const Formulario = () => {
  const { totalCarrito, cart, vaciarCarrito } = useContext(contextoCarrito);
  const [ordenId, setOrdenId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
    repetirCorreo: "",
    comentario: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { correo, repetirCorreo } = values;

    if (repetirCorreo !== correo) {
      MySwal.fire({
        title: <strong>Correos no coinciden</strong>,
        html: <i>Corrige para poder culminar la compra</i>,
        icon: "error",
      });
    } else {
      const orden = {
        cliente: values,
        compra: cart,
        total: totalCarrito(),
        fecha: new Date(),
      };

      const batch = writeBatch(db);
      const ordenRef = collection(db, "ordenes");
      const productosRef = collection(db, "productos");
      const q = query(
        productosRef,
        where(
          documentId(),
          "in",
          cart.map((item) => item.id)
        )
      );
      const productos = await getDocs(q);
      const outOfStock = [];

      productos.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= item.contador) {
          batch.update(doc.ref, {
            stock: doc.data().stock - item.contador,
          });
        } else {
          outOfStock.push(item);
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const { id } = await addDoc(ordenRef, orden);
        setOrdenId(id);

        vaciarCarrito();

        addDoc(ordenRef, orden).then((doc) => {
          setOrdenId(doc.id);
          vaciarCarrito();
        });
        console.log(orden);
      } else {
        MySwal.fire({
          title: <strong>¡Lo sentimos!</strong>,
          html: (
            <i>
              no podemos continuar porque hay items sin stock:{" "}
              {outOfStock.map((i) => i.producto).join(", ")}
            </i>
          ),
          icon: "error",
        });
      }
    }
  };

  if (ordenId) {
    return (
      <div className="orden-finalizada">
        <h2 className="etiqueta-compra-finalizada">
          ¡¡¡Compra finalizada con éxito!!!
        </h2>
        <img className="check-verde" src={check} alt="check"></img>
        <h2 className="etiqueta-compra-finalizada">Tu numero de orden es: </h2>
        <h2 className="etiqueta-compra-finalizada">{ordenId}</h2>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formulario-terminar-compra">
      <form className="formulario" onSubmit={handleSubmit}>
        <label className="etiqueta-en-formulario">
          Nombre Completo:{" "}
          <input
            value={values.nombre}
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre Completo"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Apellidos:{" "}
          <input
            value={values.apellidos}
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder="Apellidos"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Dirección:{" "}
          <input
            value={values.direccion}
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Direccion"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Correo:{" "}
          <input
            value={values.correo}
            type="text"
            id="correo"
            name="correo"
            placeholder="correo@ejemplo.com"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Repetir Correo:{" "}
          <input
            value={values.repetirCorreo}
            type="text"
            id="repetirCorreo"
            name="repetirCorreo"
            placeholder="correo@ejemplo.com"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Telefono:{" "}
          <input
            value={values.telefono}
            type="text"
            id="telefono"
            name="telefono"
            placeholder="56 9 XXXX XXXX"
            onChange={handleInputChange}
          />
        </label>
        <label className="etiqueta-en-formulario">
          Comentarios:
          <div></div>
          <textarea
            name="comentario"
            value={values.comentario}
            type="text"
            id="correo"
            placeholder="(opcional)"
            onChange={handleInputChange}
          ></textarea>
        </label>

        <div className="botones-formulario">
          <Link to={`/cart`} className="btn btn-danger">
            Volver
          </Link>
          <button className="btn btn-success" type="submit">
            Terminar compra
          </button>
        </div>
      </form>
    </div>
  );
};
