import React, { useEffect, useState } from 'react';
import ProductoList from './ProductoList';

const ProductosContainer=()=> {
const [productos,setProductos] = useState([])

useEffect(()=> {
    setTimeout(()=> {
        console.log("hola")
    setProductos([
        {id:1,nombre:"Producto 1"},
        {id:2,nombre:"Producto 2"},
        {id:3,nombre:"Producto 3"}
    ])
    },2000)
},[])

return(
<ProductoList productos={productos
}/>
    //<p>{JSON.stringify(productos)}</p>
)


}
export default ProductosContainer