import React from "react"
import {Link} from "react-router-dom"

export default class Navbar extends React.Component {
  render() {
    return(

      <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <Link to="/" className="navbar-brand text-white">Product</Link>

      <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/home" className="nav-link text-white">Home<span className="sr-only">(current)</span></Link>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

        </form>
        <Link to="/cart">
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
        <i className="fas fa-cart-plus"></i>
        </button>
        </Link>
    </nav>
  )
}
}
