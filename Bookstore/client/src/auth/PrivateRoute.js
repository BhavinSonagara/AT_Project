import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from "./index";

// const PrivateRoute = ({
//   component: Component,
//   ...rest
// }) => (
//   <Routes>
//   <Route
//     {...rest}
//     render={props =>
//       !isAuthenticated() ? (
//         <Navigate to='/signin' />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
//   </Routes>
// );
const PrivateRoute = ({ children}) => {
  
      
  if (isAuthenticated() ) {
    return children
  }
    
  return <Navigate to="/" />
}

export default PrivateRoute;