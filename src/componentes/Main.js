import React from 'react';
import Home from './Home';
import Carrito from "./Carrito"
import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer';

const Main = ()=> {
return (
    <main>
         <Routes>


<Route path="/" element={<Home/>}/>
<Route path="/productos"  element={<ItemListContainer/>}/>
<Route path="/productos/:cat"  element={<ItemListContainer/>}/>
<Route path="/item/:id" element={<ItemDetailContainer/>}/>
<Route path='/carrito' element={<Carrito/>}/>
<Route path='*' element={<h1>404</h1>}/>

</Routes>

    </main>
)
}

export default Main