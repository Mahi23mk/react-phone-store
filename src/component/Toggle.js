import React from "react";
import {ProductConsumer} from "../context"
import styled from "styled-components"
import Title from "./Title"
import "../App.css"
import Login from  "./Login"
import Register from  "./Register"

export default class Toggle extends React.Component{
  render(){
    return(
      <React.Fragment>

      <ProductConsumer>

      {value =>{
      return(
            <div className="row mt-5">
              <div className="container mt-5">
                <div className="box-controller mx-auto">
                  <div className={  (value.login_toggle?"selected-controller":"controller")}>
                    <div  onClick={()=>{value.toggle()}}>LOGIN</div>
                  </div>
                  <div className={  (value.register_toggle?"selected-controller":"controller")}>
                    <div  onClick={()=>{value.toggle_register()}}>SIGN UP</div>
                  </div>
                </div>
              </div>
            </div>
            )
            }
            }

            </ProductConsumer>


              <ProductConsumer>
              {value =>{
                if(value.login_toggle){
                  return(
                  <Login/>
                )
                }else{
                  return(
                    <Register/>
                  )
               }
            }
          }
            </ProductConsumer>

            </React.Fragment>
          )
        }
      }