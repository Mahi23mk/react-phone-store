
import React from "react";
import {ProductConsumer} from "../context"
import styled from "styled-components"
import Title from "./Title"
import {Link} from "react-router-dom"
import "../App.css"
import {Formik} from "formik"
import * as Yup from "yup"

export default class Register extends React.Component{
  loginn = ()=>{
    this.props.loginn();
  }
  render(){
    return(
      <Formik
        initialValues={{username:"",email:"",pass:"",confirmPass:""}}
        onSubmit={(values,{setSubmitting,resetForm})=>{
          setTimeout(()=>{
          console.log("loggedIn",values);

        },5000);
        if(values){
            {this.loginn()}
        }
      }}
        validationSchema={Yup.object().shape({
          username:Yup.string()
              .required(),
          email:Yup.string()
              .required()
              .email(),
          pass:Yup.string()
              .required()
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
          confirmPass:Yup.string()
              .required()
        })
        }
      >
      {
      props=>{
        const {
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleSubmit
        } = props;
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
                  <React.Fragment>
                  <form onSubmit={this.handleSubmit}>
                    <div className="box mx-auto ">
                      <div className="inner-group mx-auto ">
                        <label htmlfor="username">Username</label>
                        <input
                          type="text"
                          name="username "
                          className="login-input"
                          placeholder="Username"
                        />
                      </div>
                      <div className="inner-group mx-auto mt-3">
                        <label htmlfor="username">Email</label>
                        <input
                           type="email"
                           name="username "
                           className="login-input"
                           placeholder="Email"
                         />
                      </div>

                      <div className="inner-group mx-auto  my-3">
                        <label htmlfor="pass">Password</label>
                        <input
                          type="password"
                          className="login-input"
                          name="pass"
                          placeholder="password"/>
                      </div>

                      <div className="inner-group mx-auto  my-3">
                        <label htmlfor="confirmPass">Confirm Password</label>
                        <input
                          type="password"
                          className="login-input"
                          name="confirmPass"
                          placeholder="confirm password"
                        />
                      </div>
                      <Link  to="/">
                          <button
                          type="submit"
                          className=" my-4 p-1 login_btn"
                          onClick={()=>{value.login()}}>SIGN UP
                        </button>
                        <button className=" my-2 p-1 cancel_btn">CANCEL</button>
                      </Link>
                      </div>
                    </form>
                </React.Fragment>
              )}
          }
        }
        </ProductConsumer>
      </div>
    </React.Fragment>
      )
    }}
      </Formik>
    )
  }
}
