import React, { useState, createContext, useContext } from 'react'
import { ProductHandlerProviderProps } from '../models/ProductHandlerProviderModel'
import { Product, ProductRequest } from '../models/ProductModel'

export interface IproductHandlerContext {
    product: Product,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest,
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>,
    products: Product[],
    create: (e: React.FormEvent) => void
    getAll: () => void
    update: (articleNumber: any) => void
    remove: (articleNumber: any) => void
}

export const ProductHandlerContext = createContext<IproductHandlerContext | null>(null)


export const useProductHandlerContext = () => {
    return useContext(ProductHandlerContext)
}

const ProductHandlingProvider = ({ children }: ProductHandlerProviderProps) => {
    const baseUrl = "http://localhost:5000/api/products"
    const product_default = { articleNumber: "", imageName: "", category: "", price: 0, name: "", description: "" }
    const productRequest_default = { imageName: "", category: "", price: 0, name: "", description: "" }

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productRequest)
        })
        if (res.status === 201) {
            setProductRequest(productRequest_default)
        }
    }

    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)
        if (res.status === 200) {
            setProducts(await res.json())
        }
    }

    const update = async (articleNumber: string) => {
        const res = await fetch(`${baseUrl}/${articleNumber}`, {
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

    const remove = async (articleNumber: string) => {
        const res = await fetch(`${baseUrl}/${articleNumber}`, {
            method: "delete"
        })
        if (res.status === 204) {
            setProduct(product_default)
        }
    }

    return (
        <ProductHandlerContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, getAll, remove, update }}>
            {children}
        </ProductHandlerContext.Provider>
    )
}

export default ProductHandlingProvider