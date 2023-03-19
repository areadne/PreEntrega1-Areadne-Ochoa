import { useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { pedirDatos } from "../../helpers/PedirDatos"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(0)

    const { idProducto } = useParams()

    console.log(idProducto)

    pedirDatos().then((res) => {
        setItem( res.find((producto) => producto.id === Number(idProducto)))
    })

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}