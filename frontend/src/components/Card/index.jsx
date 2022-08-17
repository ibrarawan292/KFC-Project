import React from 'react'
import productImg from '../../assets/img/c-1.png'
import '../Card/card.css'
import {Link} from 'react-router-dom'

const Card = ({product}) => {

  return (
    <div className="col-md-4">
        <div className="card-wrapper">
        <Link to={`/product-detail/${product.slug}`}>
        <div className="card" >
           <img src={productImg} className="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">{product.title}</h5>
             <p className="card-text">{product.description}</p>
             <button type="button" className="price-btn btn btn-outline-danger">PKR {product.price}</button>
             <button type="button" className="cart-btn btn btn-danger">ADD TO BUCKET</button>
           </div>
         </div>
        </Link>
       </div>
    </div>
  )
}

export default Card