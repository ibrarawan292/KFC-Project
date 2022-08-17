import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import './product.css';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions/productAction';

const Product = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    console.log(products)
    useEffect(()=>{
      dispatch(getAllProducts())
    }, [])
  

    const {slug} = useParams()

    return (

        <div className="product-wrapper">
           
            <Header />

            <div className="product-inner ">
                <div className="lead-text">
                    <h3>{slug.toUpperCase().replace(/[^a-z]/gi, ' ')}</h3>
                </div>

                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Price(low to high)
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
                <div className="row">
            {
              products && products.map(product=><Card product={product}/>)
            }
        </div>
            </div>
            <Footer />

        </div>


    )
}

export default Product