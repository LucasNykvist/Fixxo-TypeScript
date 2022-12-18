import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/BreadCrumb';
import ProductBox from '../components/ProductBox';
import { IproductHandlerContext, useProductHandlerContext } from '../contexts/ProductHandlingContext';
import { useShoppingCart } from '../contexts/shoppingCartContext';

const DetailedProduct = () => {

    const { products, getAll } = useProductHandlerContext() as IproductHandlerContext

    React.useEffect(() => {
        getAll()
    }, [])

    const { incrementQuantity } = useShoppingCart()

    const menuData = [
        {
            title: "Description"
        },
        {
            title: "Additional"
        },
        {
            title: "Shopping & Returns "
        },
        {
            title: "Reviews"
        }
    ]

    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }
    const { id } = useParams();

    return (

        <>

            {
                products.filter((detailed: { _id: string | undefined; }) => detailed._id === id).map((detailed: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; imageName: string | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; _id: any; }, index: React.Key | null | undefined) => (
                    <div className="detailed-product" key={id}>
                        <div className="container">
                            <div className="top">
                                <div className="sale-offer">Get 25% OFF at the Fixxo Selection - Shop Now!</div>
                                <Breadcrumb where={`Products/${detailed.name}`} icon="fa-solid fa-house" />
                            </div>

                            <div className="product">
                                <div className="product-images">
                                    <div className="main-image">
                                        <img src={detailed.imageName} alt="" />
                                    </div>

                                    <div className="small-images">
                                        <div className="small-image"></div>
                                        <div className="small-image"></div>
                                        <div className="small-image"></div>
                                    </div>

                                </div>

                                <div className="product-info">
                                    <h1>{detailed.name}</h1>
                                    <p className='sku-brand'>SKU: 12345670 BRAND: The Northland</p>
                                    <ul className="rating">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                    <h3 className='price'>${detailed.price}</h3>
                                    <p className='description'>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<Link to={"/read-more"}>read more</Link >) </p>
                                    <div className="size">
                                        <p>Size:</p>
                                        <div className="sizes">
                                            <div className="size-box">S</div>
                                            <div className="size-box">M</div>
                                            <div className="size-box">L</div>
                                            <div className="size-box">X</div>
                                        </div>
                                    </div>
                                    <div className="color">
                                        <p>Color:</p>
                                        <div className="options">
                                            Choose an Option <i className="fa-regular fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <p>Qty:</p>
                                        <div className="amount">
                                            <button onClick={decrement} className="decrement">-</button>
                                            <div className="current">{quantity}</div>
                                            <button onClick={increment} className="increment">+</button>
                                        </div>
                                        <button onClick={() => incrementQuantity({ articleNumber: detailed._id, product: detailed })}>ADD TO CART</button>
                                    </div>
                                    <div className="share">
                                        <p>Share:</p>
                                        <div className="share-links">
                                            <ul>
                                                <li><i className="fa-brands fa-facebook-f"></i></li>
                                                <li><i className="fa-brands fa-instagram"></i></li>
                                                <li><i className="fa-brands fa-twitter"></i></li>
                                                <li><i className="fa-brands fa-google"></i></li>
                                                <li><i className="fa-brands fa-linkedin"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }

            <div className="desc-menu">
                <div className="container">
                    <div className="menu">
                        {
                            menuData.map(({ title }) => {
                                return (
                                    <button className='menu-button'>{title}</button>
                                )
                            })
                        }
                    </div>

                    <div className="info">
                        <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
                        <ul>
                            <li>* Village did removed enjoyed explain nor ham saw calling talking.</li>
                            <li>* Securing as informed declared or margaret.</li>
                            <li>* Joy horrible moreover man feelings own shy.</li>
                        </ul>
                        <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. </p>
                    </div>
                </div>
            </div>

            <div className="related-products">
                <div className="container">

                    <div className="top">
                        <h2>Related Products</h2>
                        <div className="btns">
                            <button><i className="fa-solid fa-chevron-left"></i></button>
                            <button><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>

                    <div className="related">
                        {
                            products.filter((product, index) => index < 21 && index > 16).map((product, index) => (<ProductBox product={product} />))
                        }
                    </div>

                </div>

            </div>
        </>



    )
}

export default DetailedProduct