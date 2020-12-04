import React from "react"
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
import CartTotals from "./CartTotals"
import {ProductConsumer} from "../../context"
import CommonNavbar from "../CommonNavbar"


export default class Cart extends React.Component {
  render() {
    return(
      <React.Fragment>
      <CommonNavbar/>
      <section>
      <ProductConsumer>
      {value=>{
          if(value.cart.length>0){
            return (
              <React.Fragment>
                <Title name="your" title="cart"/>
                <CartColumns/>
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
              </React.Fragment>
            )
          }
          else{
            return  <EmptyCart/>
          }
      }}

      </ProductConsumer>
      </section>
        </React.Fragment>
    )
  }
}
