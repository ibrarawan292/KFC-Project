import React from 'react'
import productimg from '../../assets/img/c-1.png'
import '../Card/card.css'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className="card-wrapper">
     <Link to="/product-detail">
     <div className="card" >
        <img src={productimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className="price-btn btn btn-outline-danger">PKR 520</button>
          <button type="button" className="cart-btn btn btn-danger">ADD TO BUCKET</button>
        </div>
      </div>
     </Link>
    </div>
  )
}

export default Card