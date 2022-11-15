import React from 'react'
import MainButton from './MainButton'

const ProductBox: React.FC<{ product: any }> = ({ product }) => {
    return (
        <div className="product-box">
            <div className="product-card">
                <img src={product.imageName} alt={product.name} />
                <div className="card-menu">
                    <button className='nav-icon'><i className="fa-light fa-heart"></i></button>
                    <button className='nav-icon'><i className="fa-light fa-code-compare"></i></button>
                    <button className='nav-icon'><i className="fa-light fa-bag-shopping"></i></button>
                </div>

                <div className='quick-view'>
                    <MainButton link={`/products/${product.articleNumber}`} text="QUICK VIEW" />
                </div>

            </div>

            <div className="product-info">
                <p className="category">{product.category}</p>
                <h4>{product.name}</h4>
                <ul>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                </ul>
                <p className="price">{product.price}$</p>
            </div>

        </div >
    )
}

export default ProductBox