import React from 'react'
import logo from '../../assets/img/KFC-Logo.svg'
import './header.css';
import Menu from '../Menu';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
         <div className="red-box">
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                </div>
            <div className="header-wrapper">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="auth-link">
                    <ul>
                        <li>
                            <i className="bi bi-geo-alt-fill"></i><Link to=""> Store Locator</Link>
                        </li>
                        <li>
                            <i className="bi bi-person-fill"></i><Link to="/login"> Sign in/Register</Link>
                        </li>
                        <li>
                            <i className="bi bi-person-fill"></i><Link to=""> WELCOME, IBRAR</Link>
                        </li>
                        <li>
                            <Link to=""> MY ACCOUNT</Link>
                        </li>
                        <li>
                            <Link to="">LOGOUT</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default Header