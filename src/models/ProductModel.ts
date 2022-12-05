export interface Product {
    _id: string,
    imageName: string,
    category: string,
    price: string,
    name: string,
    description: string,
    tag: string
}

export interface ProductRequest {
    imageName: string,
    category: string,
    price: string,
    name: string,
    description: string,
    tag: string
}