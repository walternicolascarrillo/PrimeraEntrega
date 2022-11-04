import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
      <nav>
        <NavLink to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvaCD7HT3plLn9vPdDvoydzbhSH8gliZ6TQ&usqp=CAU" width="250px" height="120px"/></NavLink>
        <NavLink to="/productos">productos</NavLink>
        <NavLink to="/productos/camperas">camperas</NavLink>
        <NavLink to="/productos/cajas">cajas</NavLink>
        <CartWidget/>
      </nav>
    /*<nav>
      <div>
        <a class="button" href="#">
        Nuestros Productos
        </a>
        <a class="button" href="#">
        Contactenos 
        </a>
      <CartWidget/>
      </div>
      <a href="#">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvaCD7HT3plLn9vPdDvoydzbhSH8gliZ6TQ&usqp=CAU" width="250px" height="120px"/>
      </a>
      
      
      </nav>*/
  );
};

export default NavBar;