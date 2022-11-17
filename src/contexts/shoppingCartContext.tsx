import React, { createContext, useContext, useState } from "react";
import { cartContextType } from "../@types/cart";
import ShoppingCart from "../sections/ShoppingCart";

const ShoppingCartContext = createContext<cartContextType>({
    cartItems: [],
    cartQuantity: 0,
    decrementQuantity() { },
    getItemQuantity() { },
    incrementQuantity() { },
    removeItem() { },

})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<{ children: any }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<any>([])

    const cartQuantity = cartItems.reduce(
        (quantity: number, item: { quantity: number; }) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: any) => {
        const { articleNumber, product } = cartItem

        setCartItems((items: any[]) => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: { articleNumber: any; }) => {
        const { articleNumber } = cartItem

        setCartItems((items: any[]) => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: any) => {
        setCartItems((items: any[]) => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }


    return <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}