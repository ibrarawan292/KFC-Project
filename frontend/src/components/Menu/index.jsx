import React, { useState } from 'react'
import cartIcon from '../../assets/img/cart-icon.png'
import Modal from '../Modal';
import {Link} from 'react-router-dom'

import './menu.css';
const Menu = () => {

  const [isModelopen, setisModalopen] = useState(false)

  const openModal = (e) =>{
    e.preventDefault();
    setisModalopen(true)
  }

  const closeModal = () => {
    setisModalopen(false)
  }
  return (
    <>
      <div className="menu-wrapper">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={`/collection/everyday-value`}>Everyday Value</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ala-carte-and-combos/">Ala Carte & Combos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signature-boxes">Signature Boxes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sharing">Sharing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/snacks">Snacks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/midnight-deals">MIDNIGHT DEALS</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <div className="delivery bg-light">
          <a href="" className='delivery-cart'>
            <img src={cartIcon} alt=""  onClick={openModal}/>
            <span className='delivery-cart-length'  onClick={openModal}>0</span>
          </a>
        </div>
      </div>
     {isModelopen ? <Modal closeModal={closeModal}/> : null } 
    </>
  )
}

export default Menu