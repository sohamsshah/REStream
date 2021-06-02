import { Redirect, Route } from "react-router";
import {useAuth} from "./../context/auth-context"
import React from 'react'

function PrivateRoute({ path, ...props }) {
    const {authState: {isUserLoggedIn}} = useAuth();
    // console.log(item);
    // const isUserLoggedIn = false;
    return isUserLoggedIn ? (
      <Route {...props} path={path} />
    ) : (
      <Redirect to={{
        pathname: "/auth/login",
        state: { from: path }
      }}/>
    );
}

export default PrivateRoute
