import React, { useState, createContext, useContext } from 'react'
import { ProductHandlerProviderProps } from '../models/ProductHandlerProviderModel'
import { Product, ProductRequest } from '../models/ProductModel'

export interface IproductHandlerContext {
    product: Product,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest,
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>,
    products: Product[],
    createProduct: (e: React.FormEvent) => void
    getAll: () => void
    getSpecific: (id: string) => void
    update: (id: any) => void
    remove: (id: any) => void
}

export const ProductHandlerContext = createContext<IproductHandlerContext | null>(null)


export const useProductHandlerContext = () => {
    return useContext(ProductHandlerContext)
}

const ProductHandlingProvider = ({ children }: ProductHandlerProviderProps) => {
    const baseUrl = "http://localhost:5000/api/products"
    const product_default = { _id: "", imageName: "", category: "", price: "", name: "", description: "" }
    const productRequest_default = { imageName: "", category: "", price: "", name: "", description: "" }

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productRequest)
        })
        if (res.status === 200) {
            setProductRequest(productRequest_default)
        }
    }

    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)
        if (res.status === 200) {
            setProducts(await res.json())
        }
    }

    const getSpecific = async (id: string) => {
        const res = await fetch(`${baseUrl}` + id)
    }

    const update = async (id: string) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        if (res.status === 200) {
            setProduct(await res.json())
        }
    }

    const remove = async (id: string) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: "delete"
        })
        if (res.status === 200) {
            setProduct(product_default)
        }
    }

    return (
        <ProductHandlerContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, createProduct, getAll, remove, update, getSpecific }}>
            {children}
        </ProductHandlerContext.Provider>
    )
}

export default ProductHandlingProvider