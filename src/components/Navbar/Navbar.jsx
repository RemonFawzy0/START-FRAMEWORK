import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container ">
    <Link className= {style.navbar_brand} to = {''}> START FRAMEWORK </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
     
        <li className="nav-item mx-4 my-4">
          <Link className={style.nav_link } to = {'about'}>About</Link>
        </li>
        <li className="nav-item  mx-4 my-4">
          <Link  className={style.nav_link } to = {'portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item  mx-4 my-4">
          <Link className={style.nav_link } to = {'contact'}>CONTACT</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  
  
  
  
  </>
}
