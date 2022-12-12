import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../sections/Navbar'

const UPDATE_PRODUCT_QUERY = gql`
    mutation updateProduct($_id: ID!, $name: String!, $category: String!, $price: String!, $description: String, $imageName: String!) {
        updateProduct(_id: $_id, name: $name, category: $category, price: $price, description: $description, imageName: $imageName) {
            _id, name, price, category, imageName, tag, description
        }
    }
`

const ProductEdit = () => {
    const default_value = { name: "", category: "", price: "", description: "", imageName: "", tag: "" }
    const [product, setProduct] = React.useState(default_value)
    const [updateProduct] = useMutation(UPDATE_PRODUCT_QUERY)

    const { _id } = useParams()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        updateProduct({ variables: { _id: _id, name: product.name, category: product.category, price: product.price, description: product.description, imageName: product.imageName } })
        setProduct(default_value)
    }

    return (
        <>
            <Navbar />
            <div className="update-form">
                <div className="container">
                    <Link className='back-link' to="/productsHandling">Go Back</Link>
                    <form onSubmit={handleSubmit} className="d-grid mb-5">
                        <h3 className='display-6 mb-4'>Update Product: <span>{_id}</span></h3>
                        <input type="hidden" value={_id} />
                        <input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Name' />
                        <input value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Category' />
                        <input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Price' />
                        <input value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Description' />
                        <input value={product.imageName} onChange={(e) => setProduct({ ...product, imageName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Image' />
                        <button type='submit' className='btn btn-success py-2 mt-3'>Update Product</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ProductEdit