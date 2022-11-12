import React from 'react';
import {  Navigate } from 'react-router-dom';
import { isAuthenticated } from "./index";

// const AdminRoute = ({
//   component: Component,
//   ...rest
// }) => (
//   <Routes>
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() && isAuthenticated().user.role === 1 ? (
//         <Component {...props} />
//       ) : (
//         <Navigate to='/signin' />
//       )
//     }
//   />
//   </Routes>
// );

// export default AdminRoute;

const AdminRoute = ({ children}) => {
  
      
  if (isAuthenticated() && isAuthenticated().user.role === 1 ) {
    return children
  }
    
  return <Navigate to="/" />
}

export default AdminRoute;