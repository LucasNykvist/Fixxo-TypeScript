import React from 'react'
import { useShoppingCart } from '../contexts/shoppingCartContext'

const ShoppingCartItem: React.FC<{ item: any }> = ({ item }) => {

    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()
    return (
        <div className="shoppingcart-item">
            <div className="item-image">
                <img src={item.product.imageName} alt={item.product.name} />
            </div>
            <div className="item-info">
                <div className="item-info-name">
                    {item.product.name}
                </div>
                <div className="item-info-quantity">
                    <button className='btn-left' onClick={() => incrementQuantity(item)}>+</button>
                    <span data-testid="quantity" className='quantity'>{item.quantity}</span>
                    <button className='btn-right' onClick={() => decrementQuantity(item)}>-</button>
                </div>

                <div className="item-price">
                    <div>{item.product.price * item.quantity}$</div>
                    <button onClick={() => removeItem(item.articleNumber)}><i className="fa-regular fa-trash"></i></button>
                </div>


            </div>
        </div>
    )
}

export default ShoppingCartItem