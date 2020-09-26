import React,{useContext} from "react";
import {ProductContext} from '../context/products'

export default function Products() {
  const greeting=useContext(ProductContext)
  console.log(React.useContext(ProductContext))
return <h1>product page tell you  {greeting}</h1>;
}
