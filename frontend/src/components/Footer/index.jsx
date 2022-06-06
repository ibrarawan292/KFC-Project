import React from 'react'
import '../Footer/footer.css'
import footerLogo from '../../assets/img/footer-logo.png'
import appStore from '../../assets/img/app-store.png'
import googlePlayStore from '../../assets/img/google-play.png'

const Footer = () => {
  return (
    <>
    <div className="footer-wrapper">
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
        </div>
        <div className="back-to-top">
            <h1><i className="bi bi-chevron-up"></i> <a href="">Back to top</a></h1>
        </div>
    </div>
      <div className="footer-inner">
      <div className="row">
          <div className="col-md-2">
              <ul>
                  <li className='list-title'>Information</li>
                  <li><a href="">lorem ipsum</a></li>
                  <li><a href="">lorem ipsum</a></li>
                  <li><a href="">lorem ipsum</a></li>
                  <li><a href="">lorem ipsum</a></li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul>
                  <li className='list-title'>Information</li>  
                  <li><a href="">lorem ipsum</a></li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul>
                  <li className='list-title'>Information</li>   
                  <li><a href="">lorem ipsum</a></li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul>
                  <li className='list-title'>Information</li>
                  <li><a href="">lorem ipsum</a></li>
                  <li><a href="">lorem ipsum</a></li>
                  <li><a href="">lorem ipsum</a></li>
              </ul>
          </div>
          <div className="col-md-4">
              <ul>
                  <li><img src={appStore} alt="" /></li>
                  <li><img src={googlePlayStore} alt="" /></li>
              </ul>
          </div>
      </div>
      <div className="copywrite">
          <p>© 2022 KFC Pakistan. All rights reserved.</p>
          <h4><a href="">Made</a> by <a href="">Ibrar</a></h4>
      </div>
  </div>
  <div className="red-box">
          <div className="box-1"></div>
          <div className="box-1"></div>
          <div className="box-1"></div>
          <div className="box-1"></div>
          <div className="box-1"></div>
      </div>
  </>
  )
}

export default Footer