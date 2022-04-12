import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    const Nav = [
        {
            item:"dashboard",
            url:""
        },
        {
            item:"orders list",
            url:"orders-list"
        },
        {
            item:"menu list",
            url:"menu-list"
        },
        {
            item:"customers",
            url:"customers"
        },
        {
            item:"member",
            url:"member"
        },
        {
            item:"blog",
            url:"blogs"
        }
    ]
  return (
    <>
    <div className="nav-container">
        <Link className='d-block text-center' to="/"><span>Go</span>Cook</Link>
        <div className="nav-option position-relative">
            <ul className='h-100'>
                {Nav.map((elm, index) => {
                    return <li key={index}><NavLink className={(navData) => navData.isActive ? "w-100 text-center d-block active-nav" : "w-100 text-center d-block" } key={index} to={`/${elm.url}`}>{elm.item}</NavLink></li>
                })}                                     
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navigation