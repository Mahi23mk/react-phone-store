import React from 'react';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

import {Switch,Route} from "react-router-dom"

import Navbar from "./component/Navbar"
import ProductList from "./component/ProductList"
import Details from "./component/Details"
import Cart from "./component/Cart"
import Default from "./component/Default"
import Model from "./component/Model"
import Toggle from "./component/Toggle"

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Switch>
        <Route exact path="/" component={Navbar}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/toggle" component={Toggle}/>
        <Route component={Default}/>
      </Switch>
      <Model/>
      </React.Fragment>
    )
  }

}

export default App;
