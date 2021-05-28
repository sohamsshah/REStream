import React, { useState, useEffect } from 'react'
import {loginUser} from "./../../../utils/api-calls/auth"
import {useAuth} from "./../../../context/auth-context"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  let history = useHistory();
  const [loading, setLoading] = useState(false)
    const {authState, dispatch} = useAuth();
    const initialValues = {
      username: "",
      password: ""
    };
    
    const validate = (values) => {
      let errors = {};
      const regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/i;
    
      if (!values.username) {
        errors.username = "username is required";
      } else if (!regex.test(values.username)) {
        errors.username = "Invalid username";
      }
    
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password too short";
      }
    
      return errors;
    };
    
    const error = (text) => toast.error(<div> {text} </div>, {
      position: toast.POSITION.BOTTOM_RIGHT,
    }); 

    const submitForm = async (values) => {

        setLoading(true)
        const res = await loginUser(values.username, values.password, dispatch);
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
            <div className="container">
              <h1>Sign in to continue</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Username</label>
                  <input
                    
                    name="username"
                    
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username ? "input-error" : null
                    }
                  />
                  {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
                  )}
                </div>
  
                <div className="form-row">
                  <label htmlFor="password">Password</label>
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
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
  
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In 
                </button>
              </form>
            </div>
          );
        }}
      </Formik>
        <ToastContainer />
           </div>
    )
}

export default LoginPage
