import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'
import Navbar from '../sections/Navbar'

const ProductEdit = () => {

    const { articleNumber } = useParams()
    const { product, setProduct, update } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    return (
        <>
            <Navbar />
            <div className="update-form">
                <div className="container">
                    <Link className='back-link' to="/productsHandling">Go Back</Link>
                    <form onSubmit={() => update(articleNumber)} className="d-grid mb-5">
                        <h3 className='display-6 mb-4'>Update Product: <span>{articleNumber}</span></h3>
                        <input type="hidden" value={articleNumber} />
                        <input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Name' />
                        <input value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Category' />
                        <input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Price' />
                        <input value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Description' />
                        <input value={product.imageName} onChange={(e) => setProduct({ ...product, imageName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Product Image' />
                        <button type='submit' className='btn btn-success py-2 mt-3'>Update User</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ProductEdit