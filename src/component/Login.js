import React from "react";
import {ProductConsumer} from "../context"
import styled from "styled-components"
import Title from "./Title"
import "../App.css"
import {Link} from "react-router-dom"
import {Formik} from "formik"
import * as EmailValidator from "email-validator"
import * as Yup from "yup"


export default class Login extends React.Component{
  render(){
    return(
      <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
        validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required"),
              password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
                 >
        {
          props=>{
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
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
                      <React.Fragment>
                    <form onSubmit={handleSubmit}>
                        <div className="box mx-auto ">
                          <div className="inner-group mx-auto ">
                              <label id="label2" htmlfor="email">E-mail</label>
                              <input
                                 type="text"
                                 name="email"
                                 value={values.email}
                                 className={errors.email && touched.email && "error"}
                                 placeholder="Email"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                              />
                              {errors.email && touched.email && (
                                <div className="input-feedback text-danger">{errors.email}</div>
                              )}

                          </div>
                          <div className="inner-group mx-auto  my-3">
                            <label id="label1" htmlfor="password">Password</label>
                            <input
                              type="password"
                              className={errors.password && touched.password && "error"}
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              placeholder="password"
                              onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                              <div className="input-feedback text-danger">{errors.password}</div>
                            )}
                          </div>
                            <button
                              type="submit"
                              className=" my-4 p-1 login_btn" disabled={isSubmitting}
                              onClick={!(values.email.length && values.password)?()=>value.login():null}>
                              LOGIN
                            </button>
                          <Link to="/">
                           <button className=" my-2 p-1 cancel_btn"  onClick={()=>{}}>CANCEL
                            </button>
                            </Link>

                  </div>
                     </form>

     </React.Fragment>

                  )
                }
              }
            }

            </ProductConsumer>



            </div>
            </React.Fragment>

          );
        }}
      </Formik>
    )
  }
}
