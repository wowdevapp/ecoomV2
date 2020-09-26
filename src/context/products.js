// products context
import React from 'react'
export const ProductContext = React.createContext();
export default function ProductProvider ({children}){
    const greeting='hello'
    return (
        <ProductContext.Provider value={greeting}>
            {children}
        </ProductContext.Provider>
    )
}
