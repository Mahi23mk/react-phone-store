import React from "react";
import {ProductConsumer} from "../context"
import styled from "styled-components"
import Title from "./Title"
import "../App.css"
import {Link} from "react-router-dom"

export default class Login extends React.Component{
  render(){
    return(
            <React.Fragment>
              <div className="box-container mx-auto p-3">
                <div className="header mx-auto">
                  <Title name="Login"/>
                </div>

                <ProductConsumer>
                {value =>{
                  if(value.login_toggle){
                    return(
                  <div className="box mx-auto ">

                    <div className="inner-group mx-auto ">
                      <label htmlfor="username">Username</label>
                      <input type="text" name="username " className="login-input"placeholder="Username"/>
                    </div>
                    <div className="inner-group mx-auto  my-3">
                      <label htmlfor="username">Password</label>
                      <input type="password" className="login-input" name="password" placeholder="password"/>
                    </div>
                    <Link  to="/">

                      <button type="submit" className=" my-4 p-1 login_btn"  onClick={()=>{value.login()}}>
                        LOGIN
                      </button>
                    <button className=" my-2 p-1 cancel_btn"  onClick={()=>{}}>CANCEL
                    </button>
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
