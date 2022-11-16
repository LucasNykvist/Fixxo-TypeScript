import { createContext, useContext, useState } from "react";
import { IProducts, ProductContextType } from "../@types/products";


const ProductContext = createContext<ProductContextType>({
    products: [], getProducts() {
    },
})

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProducts[]>([])

    const getProducts = async () => {
        let res = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await res.json())
    }

    console.log(getProducts());




    return <ProductContext.Provider value={{ products, getProducts }}>
        {children}
    </ProductContext.Provider>
}