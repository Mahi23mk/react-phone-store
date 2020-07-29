
import React from "react";
import {ProductConsumer} from "../context"
import styled from "styled-components"
import Title from "./Title"
import {Link} from "react-router-dom"
import "../App.css"

export default class Register extends React.Component{
  render(){
    return(
            <React.Fragment>
              <div className="box-container mx-auto p-3">
                <div className="header mx-auto ">
                  <Title name="SIGN UP"/>
                </div>

                <ProductConsumer>
                {value =>{
                  if(value.register_toggle){
                    return(
                  <div className="box mx-auto ">

                    <div className="inner-group mx-auto ">
                      <label htmlfor="username">Username</label>
                      <input type="text" name="username " className="login-input"placeholder="Username"/>
                    </div>
                    <div className="inner-group mx-auto mt-3">
                      <label htmlfor="username">Email</label>
                      <input type="email" name="username " className="login-input"placeholder="Email"/>
                    </div>

                    <div className="inner-group mx-auto  my-3">
                      <label htmlfor="username">Password</label>
                      <input type="password" className="login-input" name="password" placeholder="password"/>
                    </div>

                    <div className="inner-group mx-auto  my-3">
                      <label htmlfor="username">Confirm Password</label>
                      <input type="password" className="login-input" name="password" placeholder="confirm password"/>
                    </div>
                    <Link  to="/">
                      <button type="submit" className=" my-4 p-1 login_btn"  onClick={()=>{value.login()}}>SIGN UP</button>
                      <button className=" my-2 p-1 cancel_btn">CANCEL</button>
                    </Link>

                    </div>

                  )
                }
              }
            }
            </ProductConsumer>

          </div>
        </React.Fragment>
    )
  }
}
