import React, { useState } from 'react'
import cartIcon from '../../assets/img/cart-icon.png'
import Modal from '../Modal';
import { Link } from 'react-router-dom'
import './menu.css';
import { useEffect } from 'react'
import axios from 'axios';

const Menu = () => {


  const [categories, setCategories] = useState([])

  useEffect(() => {
    const response = axios.get(`http://localhost:9000/api/v1/product/all/category`)
    .then((res) => setCategories(res.data.data))
    
  }, [])


  const [isModelopen, setisModalopen] = useState(false)

  const openModal = (e) => {
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

                {
                  categories && categories.map((category) => {
                
                    return (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link " aria-current="page" to={`/collection/${category.slug}`}>{category.categories}</Link>
                        </li>

                      </>
                    )
                  })
                }

              </ul>
            </div>
          </div>
        </nav>
        <div className="delivery bg-light">
          <a href="" className='delivery-cart'>
            <img src={cartIcon} alt="" onClick={openModal} />
            <span className='delivery-cart-length' onClick={openModal}>0</span>
          </a>
        </div>
      </div>
      {isModelopen ? <Modal closeModal={closeModal} /> : null}
    </>
  )
}

export default Menu