import React, { createContext, useState, useContext } from "react";
import { IProducts, ProductContextType } from "../@types/products";

const ProductContext = createContext<ProductContextType>()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState<IProducts[]>([])

    const getProducts = async () => {
        let res = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await res.json())
    }

    return <ProductContext.Provider value={{ products, getProducts }}>
        {children}
    </ProductContext.Provider>
}

