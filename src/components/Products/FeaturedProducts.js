import React from "react";
import { ProductContext } from "../../context/products";
import ProductList from "./ProductList";
import Loading from "../Loading";
export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);
  console.log(loading);
  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <ProductList title="featured Product" products={featured}></ProductList>
    );
  }
}
