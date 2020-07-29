import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"

export default class Navbar extends React.Component {
  render() {
    return(
    <ProductConsumer>
      {value=>{
        return(
          <nav className=" navbar navbar-expand-lg fixed-top">
          <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="navbar-brand text-white px-1">HOME</Link>

           <div className=" collapse navbar-collapse " id="navbarTogglerDemo03">
             <ul class="navbar-nav mr-auto ">
               <li class="nav-item active ">
                 <Link to="/toggle" class="nav-link" onClick={()=>{value.toggle()}}>LOGIN <span class="sr-only">(current)</span>
                 </Link>
               </li>
               <li class="nav-item active">
               <Link to="/toggle" class="nav-link" onClick={()=>{value.toggle_register()}}>SIGN UP <span class="sr-only">(current)</span>
               </Link>
             </li>

             </ul>
             </div>
            <form className="form-inline  my-lg-0">
              <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>

            </form>
              <Link to="/cart">
                <button className="btn btn-outline-light ml-2 my-2 my-sm-0" type="submit">
                <i className="fas fa-cart-plus"></i>
                </button>
              </Link>
        </nav>
        )
      }}
    </ProductConsumer>
    )
  }
}
