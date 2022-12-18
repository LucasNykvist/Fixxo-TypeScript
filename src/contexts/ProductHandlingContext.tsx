import { log } from 'console'
import React, { useState, createContext, useContext } from 'react'
import { ProductHandlerProviderProps } from '../models/ProductHandlerProviderModel'
import { Product, ProductRequest } from '../models/ProductModel'

export interface IproductHandlerContext {
    product: Product,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest,
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>,

    products: Product[],
    featuredProducts: Product[],
    fs1Products: Product[],
    fs2Products: Product[],
    latestProducts: Product[],
    bestProducts: Product[],
    topProducts: Product[]

    createProduct: (e: React.FormEvent) => void
    getAll: () => void
    getSpecific: (id: string) => void
    getFeaturedProducts: () => void
    getFS1Products: () => void
    getFS2Products: () => void
    getLatestProducts: () => void
    getBestProducts: () => void
    getTopProducts: () => void
    update: (id: any) => void
    remove: (id: any) => void
}

export const ProductHandlerContext = createContext<IproductHandlerContext | null>(null)


export const useProductHandlerContext = () => {
    return useContext(ProductHandlerContext)
}

const ProductHandlingProvider = ({ children }: ProductHandlerProviderProps) => {
    // General Declarations
    const baseUrl = "http://localhost:5000/api/products"
    const product_default = { _id: "", imageName: "", category: "", price: "", name: "", description: "", tag: "" }
    const productRequest_default = { imageName: "", category: "", price: "", name: "", description: "", tag: "" }

    // States
    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
    const [fs1Products, setFs1Products] = useState<Product[]>([])
    const [fs2Products, setFs2Products] = useState<Product[]>([])

    const [latestProducts, setLatestProducts] = useState<Product[]>([])
    const [bestProducts, setBestProducts] = useState<Product[]>([])
    const [topProducts, setTopProducts] = useState<Product[]>([])


    // Create Product Function
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

    // GET requests
    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)
        if (res.status === 200) {
            setProducts(await res.json())
        }
    }

    const getSpecific = async (id: string) => {
        const res = await fetch(`${baseUrl}` + id)
    }

    const getFeaturedProducts = async () => {
        const res = await fetch("http://localhost:5000/api/products/tag/Featured")
        if (res.status === 200) {
            setFeaturedProducts(await res.json())
        }
    }

    const getFS1Products = async () => {
        const res = await fetch(`${baseUrl}/tag/FS1`)
        if (res.status === 200) {
            setFs1Products(await res.json())
        }
    }

    const getFS2Products = async () => {
        const res = await fetch(`${baseUrl}/tag/FS2`)
        if (res.status === 200) {
            setFs2Products(await res.json())
        }
    }

    const getLatestProducts = async () => {
        const res = await fetch(`${baseUrl}/tag/LATEST`)
        if (res.status === 200) {
            setLatestProducts(await res.json())
        }
    }

    const getBestProducts = async () => {
        const res = await fetch(`${baseUrl}/tag/BEST`)
        if (res.status === 200) {
            setBestProducts(await res.json())
        }
    }

    const getTopProducts = async () => {
        const res = await fetch(`${baseUrl}/tag/TOP`)
        if (res.status === 200) {
            setTopProducts(await res.json())
        }
    }

    // Update Product Function
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

    // Remove Product Function
    const remove = async (id: string) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: "delete"
        })
        if (res.status === 200) {
            setProduct(product_default)
        }
    }

    return (
        <ProductHandlerContext.Provider value={{
            product, setProduct, productRequest, setProductRequest, products,
            createProduct, getAll, remove, update, getSpecific, getFeaturedProducts, getFS1Products, fs1Products, fs2Products, featuredProducts, getFS2Products, bestProducts, getBestProducts, getLatestProducts, getTopProducts, latestProducts, topProducts
        }}>
            {children}
        </ProductHandlerContext.Provider>
    )
}

export default ProductHandlingProvider