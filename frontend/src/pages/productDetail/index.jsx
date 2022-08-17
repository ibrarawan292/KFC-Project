import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Modal from '../../components/Modal'
import './ProdDetail.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'


const ProductDetail = () => {

    const { slug } = useParams();
    const { products } = useSelector((state) => state.products)
    
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
       
    }, [])

    const product = products.find(product => product.slug === slug)

    const [isModelopen, setisModalopen] = useState(false)

    const openModal = (e) => {
        e.preventDefault();
        setisModalopen(true)
    }

    const closeModal = () => {
        setisModalopen(false)
    }
    
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState()
    
       quantity?setPrice(product.price*2):product.price;

    
  
    return (

        <>
            <div className="product-Detail-wrapper">
                <Header />
                <div className="p-Detail-inner mt-3">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={product.productImage} alt="" />
                        </div>
                        <div className="col-md-7 product-info">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                                </ol>
                            </nav>

                            <div className="product-title">
                                <h3>{product.title}</h3>
                            </div>
                            <div className="product-desc">
                                <p>{product.description}<br></br></p>
                            </div>
                            <div className="accordion accordion-flush accd" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        Default checkbox
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        Default checkbox
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        Default checkbox
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        Default checkbox
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="col-l-6 col-md-6 col-sm-12 ">
                                                    <button type="button" className="btn btn-outline-danger">-</button>
                                                    <button type="button" className="btn btn-danger">1</button>
                                                    <button type="button" className="btn btn-outline-danger">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="price-rate">
                                <h3>PKR {price}</h3>
                            </div>
                            <div className="row count-bucket-btn">
                                <div className="col-l-6 col-md-6 col-sm-12 count-btn">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setQuantity(quantity - 1)} >-</button>
                                    <button type="button" className="btn btn-danger">{quantity}</button>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <div className="col-l-6 col-md-6 col-sm-12 bucket-btn">
                                    <Link to="" className="btn btn-danger" onClick={openModal}>ADD TO BUCKET</Link>
                                </div>
                                <p className='mt-2'>*Prices may vary at motorway outlets</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {isModelopen ? <Modal closeModal={closeModal} /> : null}
        </>

    )
}

export default ProductDetail