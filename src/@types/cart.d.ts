export interface cartItems {
    quantity?: number,
    articleNumber?: string,
    name?: string,
    price?: number,
    imageName?: string
}

export type cartContextType = {
    cartItems: cartItems[],
    cartQuantity: any,
    getItemQuantity: any,
    incrementQuantity: any,
    decrementQuantity: any,
    removeItem: any
}