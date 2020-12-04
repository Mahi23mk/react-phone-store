import React from "react"
import {ProductConsumer} from "../context"
import  {Link} from "react-router-dom"
import CommonNavbar from "./CommonNavbar"
import "../App.css"

export default class Details extends React.Component {
  render() {
    return(
      <ProductConsumer>
      {value=>{
        const {id,company,img,info,price,title,inCart} = value.detailProduct; //actual data stored in the state retrieve
        return(
          <React.Fragment>
          <CommonNavbar/>
          <div className="container mt-4">
            <div className="row">
              <div className="col-10 mx-auto text-slanted text-center my-5">
              <h1>{title}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product"/>
              </div>

              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h3>model:{title}
                </h3>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by:
                <span className="text-uppercase">{company}</span></h4>
                <h4><strong>price: ${price}</strong></h4>
                <p className="text-capitalise font-weight-bold mt-3 mb-0">some info about product</p>
                <p className="text-muted lead">{info}</p>
                <div>
                <Link to="/">
                <button className="btn-lg my_btn">BACK TO PRODUCTS</button>
                </Link>
                <button className="btn-lg bg-danger my_btn " disabled={inCart?"true":"false"} onClick={()=>{
                  value.addToCart(id);
                  value.openModel(id);
                }}>{inCart?"In Cart":"Add To Cart"}</button>

                </div>
              </div>
            </div>
          </div>
          </React.Fragment>
        );

      }}
      </ProductConsumer>
    )
  }
}
