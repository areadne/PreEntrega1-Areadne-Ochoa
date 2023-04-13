import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
// import { pedirDatos } from "../../helpers/PedirDatos"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(0)

    const { idProducto } = useParams()

    console.log(idProducto)

    // pedirDatos()
    //     .then((res) => {
    //     setItem( res.find((producto) => producto.id === Number(idProducto)))
    // })

    useEffect(() => {

        const docRef = doc(db, "productos", idProducto)
        
        getDoc(docRef)
            .then((doc) => {
                if (doc.exists()){
                    setItem({
                        id: doc.id,
                        ...doc.data()
                    })
                    console.log(doc.id)
                    console.log(doc.data())

                } else{
                    MySwal.fire({
                        title: <strong>ERROR</strong>,
                        html: <i>El producto indicado no existe</i>,
                        icon: 'error'
                      })
                    console.log("El producto no existe")
       
                }
            })

    }, [idProducto])


    return(
        <div>
        
            <ItemDetail item={item}/>
        
        </div>
    )

}