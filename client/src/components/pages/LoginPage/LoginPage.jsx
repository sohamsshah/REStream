import React, { useState, useEffect } from 'react'
import {loginUser} from "./../../../utils/api-calls/auth"
import {useAuth} from "./../../../context/auth-context"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import {useHistory, Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css"
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';


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
          error("Wrong username or password. Please try again");
        }
        setLoading(false);
    };

    useEffect(() => { window.scrollTo(0, 0); }, []);
    
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
                <Typography className="heading" fontSize="xl" fontWeight="semibold"> Log in </Typography>
              <form onSubmit={handleSubmit}>
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
                <div className="form__submit">
                <Button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Log In 
                </Button>
                <div className="bottom-text">
                    Don't have an account? <Link to="/auth/signup">Sign up</Link> here
                </div>
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

export default LoginPage
