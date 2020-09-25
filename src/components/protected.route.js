import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {UserContext} from '../context/userContext'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn,setIsLoggedIn] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
       return isLoggedIn ? <Component {...props} /> : <Redirect to={
          {
          pathname:"/login",
          state:{
            from: props.location
          }
        }
        }/>
      }}
    />
  );
};


