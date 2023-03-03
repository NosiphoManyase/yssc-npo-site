import React from "react";
import {Link} from 'react-router-dom'
import ysLogo from '../images/yssc-logo (2).png'

function navBar(){

    return(
      <>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
          <div className="container-fluid"> 
            <Link to="/" className="navbar-brand m-0 fw-bold text-bottom" >
              <img src={ysLogo} style={{width: '50px', borderRadius: '50%'}} className="mx-1"/>
              Yizani Seniors 
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 fw-bold">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">Get in touch</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default navBar