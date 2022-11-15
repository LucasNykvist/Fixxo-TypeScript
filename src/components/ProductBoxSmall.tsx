import React from 'react'

const ProductBoxSmall: React.FC<{ product: any }> = ({ product }) => {
    return (
        <div className='product-box-small'>
            <div className='product-box-small-card'>
                <img src={product.imageName} alt={product.name} />
            </div>
            <div className='product-box-small-info'>
                <p className='category-sm'>{product.category}</p>
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
        </div>
    )
}

export default ProductBoxSmall