import React from "react"
import Product from "./Product"
import Title from "./Title"
import {ProductConsumer} from "../context"

export default class ProductList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="py-4">
          <div className="container mt-5">
            <Title name="Our products" />
            </div>

            <div className="row mx-3">

                <ProductConsumer>{
                  val=>{
                  return val.products.map(x=>{
                    return <Product key={x.id} x={x}/>
                  })
                  }
                }
                </ProductConsumer>

              </div>

        </div>
      </React.Fragment>

    )
  }
}
