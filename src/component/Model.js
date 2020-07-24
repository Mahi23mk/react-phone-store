import React from "react"
import styled from "styled-components"
import {ProductConsumer} from "../context"
import {Link} from "react-router-dom"



export default class Model extends React.Component{
  render(){
    return(
      <ProductConsumer>
      {value =>{
        const {img,title,price} = value.modelProduct;

        if(value.openModel){
          return(
            <ModelContainer>
              <div className="container">
                <div className="row">
                  <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalise p-5">
                    <h5>add item</h5>
                    <img src={img} className="img-fluid" alt="product"/>
                    <h5>{title}</h5>
                    <h5 className="text-muted">Price:${price}</h5>
                    <Link to="/">
                      <button className="btn-lg my_btn text-capitalise"
                      onClick={()=>value.closeModel()}>continue</button>
                    </Link>
                    <Link to="/cart">
                      <button className="btn-lg my_btn bg-danger text-capitalise"
                       onClick={()=>value.closeModel()}>go to cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </ModelContainer>
          )
        }
        else{
          return (null);
        }
      }}
      </ProductConsumer>
    )
  }
}

const ModelContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  #model{
    background:var(--mainWhite);
  }
`;
