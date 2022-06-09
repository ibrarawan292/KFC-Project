import React from 'react'
import './modal.css'
import cartIcon from '../../assets/img/cart-icon.png'

const Modal = ({ closeModal }) => {

    return (
        <>
            <div className="bucket-modal-wrapper" onClick={closeModal}>

            </div>
            <div className="bucket-modal-inner">
                <div className="bucket-modal-head">
                    <div className="bucket-title">
                        YOUR <br /> BUCKET
                    </div>
                    <div className="delivery ">
                        <a href="" className='delivery-cart'>
                            <img src={cartIcon} alt="" />
                            <span className='delivery-cart-length'>0</span>
                        </a>
                    </div>
                    <div className="bucket-total">
                        PKR 0
                    </div>
                </div>
                <div className="bucket-modal-body ">
                    {/* <div className="bucket-empty-text p-5 mt-5 text-center">
        <p> Hungry? Add something to your bucket !!! </p>
        </div> */}
                    <div className="body-title">
                        <h3 className='text-center'>SELECT DELIVERY AREA</h3>
                    </div>
                    <form className='delivery-form'>
                        <div className="form-floating">
                            <div class="form-floating mb-3">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Select city</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect">City</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingText" placeholder="Search" />
                                <label for="floatingText">Password</label>
                            </div>
                        </div>

                        <div className="btn btn-danger w-100 btn-bucket">NEXT</div>
                    </form>
                    <div className="bucket-summary">
                        <div className="item-detail">
                            <h5>Some name</h5>
                            <p>1 x PKR980</p>
                            <p>Select drink: Pepsi</p>
                            <button className='btn btn-outline-danger me-2'>+</button>
                            <button className='btn btn-outline-danger'>-</button>
                        </div>
                        <div className="price-detail">
                            <h4>PKR 250</h4>
                        </div>
                    </div>
                    <div className="grand-total">
                        <h5>YOUR TOTAL</h5>
                        <h5>PKR 250</h5>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Modal