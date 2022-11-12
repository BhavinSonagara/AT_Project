import React, {Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {signout,isAuthenticated} from '../auth';
import {itemTotal} from './cartHelpers';

const divStyle = {
   color : '#ff9900',
  };


const Menu = ({history}) => {
    const navigate = useNavigate();
    return (

        <div>
            <ul className="nav nav-tabs bg-dark" style={{height: 50}}>
        
                    <li className="nav-item">
                        <Link className="nav-link" style = {divStyle} to="/">HOME</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style = {divStyle} to="/shop">SHOP</Link>
                    </li>

                {!isAuthenticated() && (
                 <Fragment>         
                    <li className="nav-item">
                        <Link className="nav-link" style = {divStyle} to="/signin">LOGIN</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style = {divStyle} to="/signup">SIGNUP</Link>
                    </li>
 
                    <li className="nav-item ml-auto">
                       <Link className="nav-link" style = {divStyle} to="/about">ABOUT</Link>
                    </li>
                </Fragment>
                )}

                {isAuthenticated() && (
                    <Fragment>
                     {isAuthenticated() && isAuthenticated().user.role === 0 && (
                         
                    <li className="nav-item">
                        <Link className="nav-link" style = {divStyle} to="/user/dashboard">DASHBOARD</Link>
                    </li>
                     )}

                     {isAuthenticated() && isAuthenticated().user.role === 1 && (
                         
                         <li className="nav-item">
                             <Link className="nav-link" style = {divStyle}  to="/admin/dashboard">DASHBOARD</Link>
                         </li>
                          )}
                    
                    
                    <li className="nav-item">
                       <Link className="nav-link" style = {divStyle} to="/cart">
                           CART <sup><small className="cart-badge">{itemTotal()}</small></sup>
                        </Link>
                    </li>
                          
                    {/* <li className="nav-item">
                       <Link className="nav-link" style = {divStyle} to="/about">ABOUT</Link>
                    </li> */}
                    
                    <li className="nav-item ml-auto">
                        <span className="nav-link" style={divStyle} onClick={() => signout(() => navigate('/'))}>LOGOUT</span>
                    </li>
                    
                    </Fragment>                 

                )}
                
            </ul>
        </div>
    )
}

export default Menu;
