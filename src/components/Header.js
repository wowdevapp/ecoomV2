import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.svg"
export default function Header() {
  return <header className='header' >
     <img src={logo} className='logo' alt="vintage"/>
     <nav>
         <ul>
           <div>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/products">PRODUCT</Link>
              </li>
           </div>
           <div>
           <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/cart">CART</Link>
              </li>
           </div>
         </ul>
     </nav>
  </header>
}
