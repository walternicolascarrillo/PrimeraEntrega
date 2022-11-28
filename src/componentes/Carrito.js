import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "./firebase"

const Carrito = () => {


    const valorDelContexto = useCarrito()
    const refName = useRef() 
    const refAge = useRef()
    const [id, setId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                name: "Lionel Scaloni",
                phone: "11xxxxxxxx",
            },
            products: [],
            total : 100,
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection,orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }


    return (
        <div>
            {id ? <h1>Su orden ha sido generada exitosamente, su id de rastreo es {id}</h1> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >guardar</button>
            </form>
        </div>
    )
}

export default Carrito