import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"
import { productosIniciales } from "./utils"

const NavBar = ({ isHeader }) => {

  const categorias = productosIniciales.map((item) => {
      return (
          <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
              {item.category}
          </NavLink>
      )
  })

  return (
      <nav className="nav">
          {!isHeader && categorias }
          <NavLink className="nav__link link" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvaCD7HT3plLn9vPdDvoydzbhSH8gliZ6TQ&usqp=CAU" width="250px" height="120px"/></NavLink>
          <NavLink className="nav__link link" to="/productos">productos</NavLink>
          <NavLink to="/productos/camperas">camperas</NavLink>
          <CartWidget />
      </nav>
  )

}

export default NavBar;