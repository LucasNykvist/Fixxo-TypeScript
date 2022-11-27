export interface Product {
    articleNumber: string,
    imageName: string,
    category: string,
    price: string,
    name: string,
    description: string
}

export interface ProductRequest {
    imageName: string,
    category: string,
    price: string,
    name: string,
    description: string
}