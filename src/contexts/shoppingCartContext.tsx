import { createContext, useContext, useState } from "react";
import { number } from "yup/lib/locale";
import { cartContextType, cartItems } from "../@types/cart";
// import ShoppingCart from "../components/ShoppingCart";

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

    const [cartItems, setCartItems] = useState<cartItems[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string | undefined) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: { articleNumber: any; product: any; }) => {
        const { articleNumber, product } = cartItem

        setCartItems((items): (any | { articleNumber: any; product: any; quantity: number; })[] => {
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

        setCartItems(items => {
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

    const removeItem = (articleNumber: string | undefined) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }


    return <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }}>
        {children}
        {/* <ShoppingCart /> */}
    </ShoppingCartContext.Provider>
}