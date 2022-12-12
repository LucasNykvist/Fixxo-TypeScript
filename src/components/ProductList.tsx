import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'
import { Product } from '../models/ProductModel'
import { gql, useMutation, useQuery } from '@apollo/client';

const GET_PRODUCTS_QUERY = gql`{ products {_id, name, price, category, imageName, tag, description}}`

const REMOVE_PRODUCT = gql`
    mutation removeProduct($_id: ID!){
        removeProduct(_id: $_id) {
            _id
        }
    }
`

export const ProductList = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)
    const [removeProduct] = useMutation(REMOVE_PRODUCT)

    if (error) {
        return <p>ERROR...</p>
    }
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="user-list">
                <div className="container">
                    <h3 className='display-6 mb-4'>- ALL PRODUCTS -</h3>
                    {
                        data.products.map((product: Product) => (<div key={product._id} className="list-item mb-3">
                            <img src={product.imageName} alt="" />
                            <h2>PRODUCT NAME: <span>{product.name}</span></h2>
                            <h2>PRODUCT CATEGORY: <span>{product.category}</span></h2>
                            <h2>PRODUCT PRICE: <span>{product.price}$</span> </h2>
                            <h2>PRODUCT DESCRIPTION: <span>{product.description}</span> </h2>
                            <h2>ARTICLE NUMBER: <span>{product._id}</span></h2>
                            <div className="buttons">
                                <Link className='editbtn' to={`/productsHandling/update/${product._id}`}><i className="fa-regular fa-pen-to-square"></i></Link>
                                <button onClick={() => removeProduct({ variables: { _id: product._id } })}><i className="fa-regular fa-trash"></i></button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )
}
