import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Shop from './core/Shop'
import Cart from './core/Cart'
import Product from './core/Product';
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import UserProfile from './user/UserProfile';
import AddCategory from './admin/AddCateogary';
import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import Orders from './admin/Orders';
import ManageProducts from './admin/ManageProducts';


const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/product/:productId" element={<Product/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/cart" element={<Cart/>} />
                {/* <Route path="/about" element={<About/>} /> */}
                {/* <PrivateRoute  path="/user/dashboard" element={UserDashboard} />
                <PrivateRoute  path="/profile/:userId" element={Profile} />
                <AdminRoute  path="/admin/dashboard" element={AdminDashboard} />
                <AdminRoute  path="/create/category" element={AddCategory} />
                <AdminRoute  path="/create/product" element={AddProduct} />
                <AdminRoute  path="/admin/products/update/:productId" element={UpdateProduct} />
                <AdminRoute  path="/admin/orders" element={Orders} />
                <AdminRoute  path="/admin/products" element={ManageProducts} /> */}

                <Route path="/user/dashboard" element={<PrivateRoute><UserDashboard/></PrivateRoute>} />
                <Route path="/profile/:userId" element={<PrivateRoute><UserProfile/></PrivateRoute>}  />
                <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>} />
                <Route path="/create/category" element={<AdminRoute><AddCategory/></AdminRoute>} />
                <Route path="/create/product" element={<AdminRoute><AddProduct/></AdminRoute>} />
                <Route path="/admin/products/update/:productId" element={<AdminRoute><UpdateProduct/></AdminRoute>} />
                <Route path="/admin/orders" element={<AdminRoute><Orders/></AdminRoute>} />
                <Route path="/admin/products" element={<AdminRoute><ManageProducts/></AdminRoute>} />
                {/* <Route  path='/profile/:userId' element={<PrivateRoute/>}>
                    <Route  path='/' element={UserDashboard}/>
                </Route> */}

                
            </Routes>
        </BrowserRouter>
    );
};

export default Routess;