import React from "react"
import {storeProducts,detailProduct} from "./data"


const ProductContext = React.createContext(); //variable

class ProductProvider extends React.Component{
  state={
    products:[],
    detailProduct:detailProduct,
    cart:[],
    openModel:false,
    modelProduct: detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  };

  componentDidMount(){
    this.setProducts();
  }
  //function or a method inside the class which we will call in componentDidMount
  // we ARE COPYING THE products from the actual data
  setProducts =()=> {
    let temp = [];
    storeProducts.forEach(item=>{
      const single_item = {...item}; //copying the values not refrencing it
      temp = [...temp,single_item];
    });
      this.setState(()=>{
        return {products:temp};
      });
  } ;
  getItem = (id)=>{
    const x = this.state.products.find(item=>item.id === id);
    return x;
  };
  handelDetail=(id)=>{
    const x = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:x};
    })
  };

  addToCart = (id)=>{
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const single_product = tempProducts[index];
    single_product.inCart = true;
    single_product.count = 1;
    const price = single_product.price;
    single_product.total = price;

    this.setState(()=>{
      return{products:tempProducts,cart:[...this.state.cart,single_product]};
    },()=>{this.addTotals();} )
  };


Open_model=(id)=>{
  const product = this.getItem(id);
  this.setState(()=>{
    return{modelProduct:product,openModel:true};
  });
}

closeModel=()=>{
  this.setState(()=>{
    return{openModel:false};
  });
}

increment=(id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id===id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count+1;
  product.total = product.count * product.price;

  this.setState(()=>{
    return{
      cart:[...tempCart]
    }
  },()=>{this.addTotals()})

};

decrement =(id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id===id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count-1;
  if(product.count===0){
    this.removeItem(id);
  }
  else{
    product.total = product.count * product.price;
    this.setState(()=>{
      return{
        cart:[...tempCart]
      }
    },()=>{this.addTotals()})
  };
};

removeItem = (id)=>{
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];
  tempCart = tempCart.filter(item=>item.id !== id);

  const index = tempProducts.indexOf(this.getItem(id));
  let removeProduct = tempProducts[index];
  removeProduct.inCart = false;
  removeProduct.count = 0;
  removeProduct.total = 0;

  this.setState(()=>{
    return{
      cart:[...tempCart],
      products:[...tempProducts]
    }
  },()=>{this.addTotals()})

};

clearCart =(id)=>{
  this.setState(()=>{
    return{
      cart:[]
    }
  },()=>{this.setProducts()})
}

addTotals=()=>{
  let subtotal = 0;
  this.state.cart.map((item)=>{subtotal+=item.total});
  const tempTax = subtotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subtotal + tax;
  this.setState(()=>{
    return{
      cartSubTotal:subtotal,
      cartTax:tax,
      cartTotal:total,
    }
  })
}

  render(){
    return(
      <ProductContext.Provider value={{
        ...this.state,
        handelDetail:this.handelDetail,
        addToCart:this.addToCart,
        Open_model:this.Open_model,
        closeModel:this.closeModel,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart

      }}>
      {this.props.children}
      </ProductContext.Provider>
    );

  }
}

const ProductConsumer = ProductContext.Consumer ;

export{ProductProvider,ProductConsumer};
