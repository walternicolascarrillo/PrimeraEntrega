import React, { useEffect, useState } from "react"
import Header from "./componentes/Header"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import Main from "./componentes/Main"
import ProductosContainer from "./componentes/ProductosContainer"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./componentes/CustomProvider"





function Algo(){
    const  [phrase,setPhrase] = useState("Frase del Comandante")
    useEffect(()=>{
    getPhrase()
    },[])

    const getPhrase =()=> {
        const pedido = fetch("https://ricardofort.herokuapp.com/")
        pedido
        .then((respuesta)=> {
            return respuesta.json()
        })
        .then(({frase})=> {
            setPhrase(frase)
        
        })
        .catch((error)=>{
            console.log(error)
        })
        
        console.log(pedido)}
    return (
<>
<CustomProvider>
<BrowserRouter>
<Header/>
<Main/>
<ItemListContainer title="Dream Store"/>
<ProductosContainer/>
<button onClick={getPhrase}>Obtener frase del comandante</button>
<p>{phrase}</p>
<Footer/>
</BrowserRouter>
</CustomProvider>
</>      
    ) 
    
    
  }
  export default Algo