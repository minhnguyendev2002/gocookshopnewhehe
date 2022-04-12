import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Navigation/Navigation"
import reportWebVitals from './reportWebVitals';
import App from './App';
import Blogs from './Pages/Blogs/Blogs'
import Customers from "./Pages/Customer/Customer"
import Member from "./Pages/Member/Member" 
import OrderList from "./Pages/orderList/orderList";
import MenuList from "./Pages/menuList/menuList"
import AddPost from "./Pages/addPost/addPost";
import Login from "./Components/Login/Login";
import {LoginProvider, LoginContext} from "./hooks/acceptLogin"
import './index.css';

const Index = () => {
  const context = useContext(LoginContext)
  return (
    <Router>
      {
        context.accept ? 
        <>
          <div className="d-flex">
            <Nav />
              <Routes>
                <Route path="/" element={<App />} />
                <Route exact path="/blogs" element={<Blogs />} />
                <Route path="/blogs/add-post" element={<AddPost />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/member" element={<Member />} />
                <Route path="/orders-list" element={<OrderList />} />
                <Route path="/menu-list" element={<MenuList />} />
                <Route path="/new" element={<MenuList />} />
              </Routes>
          </div>
        </> : <Login />
      }
  </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LoginProvider>
    <Index />
  </LoginProvider>
);

reportWebVitals();
