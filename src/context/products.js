// products context
import React from "react";
import axios from "axios";
import URL from "../utils/URL";
import { featuredProduct } from "../utils/helpers";
export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    axios.get(`${URL}/products`).then((response) => {
      const featured = featuredProduct(response.data);
      setProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
