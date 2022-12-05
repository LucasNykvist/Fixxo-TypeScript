import React from 'react'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'

const ProductCreation: React.FC = () => {

    const { createProduct, productRequest, setProductRequest } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    return (
        <>
            <div className="form mt-3">
                <div className="container">
                    <form onSubmit={createProduct} className="d-grid mb-5">
                        <h3 className='display-6 mb-4'>Add Product</h3>
                        <input value={productRequest.name} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product Name' />
                        <input value={productRequest.category} onChange={(e) => setProductRequest({ ...productRequest, category: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product Category' />
                        <input value={productRequest.price} onChange={(e) => setProductRequest({ ...productRequest, price: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product Price' />
                        <input value={productRequest.description} onChange={(e) => setProductRequest({ ...productRequest, description: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product description' />
                        <input value={productRequest.imageName} onChange={(e) => setProductRequest({ ...productRequest, imageName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product Image-link' />
                        <input value={productRequest.tag} onChange={(e) => setProductRequest({ ...productRequest, tag: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Product Tag' />
                        <button type='submit' className='btn btn-success py-2 mt-3'>Add Product</button>
                    </form>
                </div>
            </div></>
    )
}

export default ProductCreation