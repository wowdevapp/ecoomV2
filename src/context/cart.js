import React from "react";
import localCart from "../utils/localCart";
export const CartContext = React.createContext;
export default function CartProvider({ children }) {
  const products = React.useContext(localCart);
  return (
    <CartContext.Provider value={products}>{children}</CartContext.Provider>
  );
}
