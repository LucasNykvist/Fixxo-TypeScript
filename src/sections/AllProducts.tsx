import React from 'react'
import { useProductContext } from '../contexts/productsContext'
import ProductBox from '../components/ProductBox'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'

const AllProducts = () => {

    const { getAll, products } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    React.useEffect(() => {
        getAll()
    }, [])

    return (
        <div className="container all">
            <div className="all-products">
                {
                    products.map((products, index) => <ProductBox key={index} product={products} />)
                }
            </div>
        </div>
    )
}

export default AllProducts