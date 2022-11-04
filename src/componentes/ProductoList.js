import React from 'react';
import Producto from './Producto';
const ProductoList = ({productos}) => {
    
    
    return (
        <section>
            {productos.map((producto)=>{
                return (
                    <Producto key={producto.id} producto={producto}/> 
                   )
            })}
        </section>
    )
}
    export default ProductoList