import React, { useEffect, useState } from "react"
import Header from "./componentes/Header"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import ProductosContainer from "./componentes/ProductosContainer"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"




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
<BrowserRouter>
<Header/>
<main>
    <Routes>

                <Route path="/" element={<ItemListContainer/>}/>
		        <Route path="/productos"  element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path='*' element={<h1>404</h1>}/>

    </Routes>
</main>
<ItemListContainer title="Dream Store"/>
<ProductosContainer/>
<button onClick={getPhrase}>Obtener frase del comandante</button>
<p>{phrase}</p>
<Footer/>
</BrowserRouter>
</>      
    ) 
    
    
  }
  export default Algo