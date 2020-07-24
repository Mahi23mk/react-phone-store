import React from "react"
import {Link} from "react-router-dom"

export default class Navbar extends React.Component {
  render() {
    return(

    <nav className="navbar navbar-expand navbar-light bg-dark">
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <Link to="/" className="navbar-brand text-white">HOME</Link>

     <div className=" navbar-collapse " id="navbarTogglerDemo03">
     </div>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

        </form>
        <Link to="/cart">
        <button className="btn btn-outline-light ml-2 my-2 my-sm-0" type="submit">
        <i className="fas fa-cart-plus"></i>
        </button>
        </Link>
    </nav>
  )
}
}
