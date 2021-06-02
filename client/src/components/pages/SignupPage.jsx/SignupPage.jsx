import React, { useState, useEffect } from 'react'
import {signUpUser} from "./../../../utils/api-calls/auth"
import {useAuth} from "./../../../context/auth-context"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import "./SignupPage.css"
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';

function SignupPage() {
  let history = useHistory();
  const [loading, setLoading] = useState(false)
    const {authState, dispatch} = useAuth();
    const initialValues = {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    };
    
    const validate = (values) => {
      let errors = {};
      const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/i;
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!values.username) {
        errors.username = "username is required";
      } else if (!usernameRegex.test(values.username)) {
        errors.username = "Invalid username";
      }
      if (!values.email) {
        errors.username = "email is required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid Email ID";
      }
    
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password too short";
      }

      if(!values.confirmPassword){
          errors.confirmPassword = "Confirm Password is required"
      } else if (values.password !== values.confirmPassword ) {
        errors.confirmPassword = "Passwords doesn't match";
      }
    
      return errors;
    };
    
    const error = (text) => toast.error(<div> {text} </div>, {
      position: toast.POSITION.BOTTOM_RIGHT,
    }); 

    const submitForm = async (values) => {

        setLoading(true)
        const res = await signUpUser(values.email, values.username, values.password, dispatch);
        if(res.success){
          history.push('/');
        }
        else{
          error("Something went wrong");
        }
        setLoading(false);
    };
    
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty
          } = formik;
          return (
            <div className="login">
              
              <div className="login__content">
              <div className="form__brand">
                    REStream
                </div>
              <div className="form-wrapper">
                <Typography className="heading" fontSize="xl" fontWeight="semibold"> Sign Up </Typography>
              <form onSubmit={handleSubmit}>
              <div className="form-row">
                  <div className="form__label">
                  <label>Email</label>
                  </div>
                  <div className="form__input">
                  <input
                    
                    name="email"
                    
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  </div>
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
  
                <div className="form-row">
                  <div className="form__label">
                  <label>Username</label>
                  </div>
                  <div className="form__input">
                  <input
                    
                    name="username"
                    
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username ? "input-error" : null
                    }
                  />
                  </div>
                  {errors.username && touched.username && (
                    <div className="error">{errors.username}</div>
                  )}
                </div>
  
                <div className="form-row">
                  <div className="form__label">
                  <label htmlFor="password">Password</label>
                  </div>
                  <div className="form__input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  </div>
                
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <div className="form-row">
                  <div className="form__label">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  </div>
                  <div className="form__input">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword ? "input-error" : null
                    }
                  />
                  </div>
                
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                </div>
                <div className="form__submit">
                <Button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign up
                </Button>
                </div>
              </form>
              </div>
              </div>
            </div>
          );
        }}
      </Formik>
        <ToastContainer />
           </div>
    )
}

export default SignupPage
