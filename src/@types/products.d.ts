export interface IProducts {
    articleNumber: string,
    name: string,
    description?: string,
    category: string,
    price: number,
    rating: Number,
    imageName: string
}

export type ProductContextType = {
    products: IProducts[],
    getProducts: any
}