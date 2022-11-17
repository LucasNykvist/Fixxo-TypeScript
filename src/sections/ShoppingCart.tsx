import React from 'react'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { useShoppingCart } from '../contexts/shoppingCartContext'

const ShoppingCart = () => {

    const { cartItems } = useShoppingCart()

    return (
        <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="ShoppingCart" aria-labelledby="ShoppingCartLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-light fa-bag-shopping me-3'></i>Your Shopping Cart</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
                }
            </div>
        </div>
    )
}

export default ShoppingCart