import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import './product.css';


const Product = () => {
    return (

        <div className="product-wrapper">
            <Header />

            <div className="product-inner ">
                <div className="lead-text">
                    <h3>SIGNATURE BOXES</h3>
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
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />

        </div>


    )
}

export default Product