import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'
import { Product } from '../models/ProductModel'

export const ProductList = () => {

    const { products, getAll, remove } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    useEffect(() => {
        getAll()
    }, [getAll])

    return (
        <>
            <div className="user-list">
                <div className="container">
                    <h3 className='display-6 mb-4'>- ALL PRODUCTS -</h3>
                    {
                        products.map((product: Product) => (<div key={product.articleNumber} className="list-item mb-3">
                            <h2>PRODUCT NAME: <span>{product.name}</span></h2>
                            <h2>PRODUCT CATEGORY: <span>{product.category}</span></h2>
                            <h2>PRODUCT PRICE: <span>{product.price}$</span> </h2>
                            <h2>PRODUCT DESCRIPTION: <span>{product.description}</span> </h2>
                            <img className='w-25' src={product.imageName} alt="" />
                            <h2>ARTICLE NUMBER: <span>{product.articleNumber}</span></h2>
                            <div className="buttons">
                                <Link className='editbtn' to={`/productsHandling/update/${product.articleNumber}`}>Edit Product</Link>
                                <button onClick={() => remove(product.articleNumber)}>Delete Product</button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )
}
