import React from "react"
import Product from "./Product"
import Title from "./Title"
import {ProductConsumer} from "../context"

export default class ProductList extends React.Component {
  render() {
    const search = this.props.search;
    let filters = [];

    return(
      <React.Fragment>
        <div className="py-4">
          <div className="container my-auto">
            <Title name="Our products" />
            </div>

            <div className="row mx-3">

                <ProductConsumer>
                {
                  val=>{
                    filters = val.products.filter(x=>{
                      return (x.title.toLowerCase().indexOf(search.toLowerCase()) !==-1)
                    })

                    if(!search){
                        return val.products.map(x=>{
                          return <Product key={x.id} x={x}/>
                        })
                    }
                    else{

                          return filters.map(x=>{
                            return <Product key={x.id} x={x}/>;
                          })
                  
                    }

                  }
                }
                </ProductConsumer>

              </div>

        </div>
      </React.Fragment>

    )
  }
}
