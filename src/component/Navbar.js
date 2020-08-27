import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"

export default class Navbar extends React.Component {
  render() {
    return(
    <ProductConsumer>
      {value=>{
        return(
          <nav className=" navbar navbar-expand-lg navbar-light bg-light">

          <Link to="/" className="navbar-brand"><b>HOME</b></Link>


          <button class="navbar-toggler bg-light " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarTogglerDemo03">

          <form className="form-inline my-auto navbar-brand">
            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
          </form>


            <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/cart" >
                  <button className="btn btn_nav " type="submit">
                  <i className="fas fa-cart-plus text-dark "></i>
                  </button>
                </Link>
              </li>
              </ul>
              <ul className="navbar-nav  ml-auto">

              <li className="nav-item active ">
                <Link to="/toggle" className="nav-link text-success" onClick={()=>{value.toggle()}}>LOGIN <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/toggle" className="nav-link text-danger" onClick={()=>{value.toggle_register()}}>SIGN UP <span className="sr-only">(current)</span>
                </Link>
               </li>
           </ul>

         </div>



        </nav>
        )
      }}
    </ProductConsumer>
    )
  }
}
