import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

const Header = ({title}) => {
    const [newToast, setNewToast] = React.useState(false)

    let toast = [
        {
            "img":"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "title":"Người dùng Putera đã đặt hàng",
            "time":"12:20:24 Mar",
            "imgFood":"https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            "img":"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
            "title":"Người dùng Putera đã đặt hàng",
            "time":"09:10:02 Mar",
            "imgFood":"https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            "img":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "title":"Người dùng Putera đã đặt hàng",
            "time":"08:22:55 Mar",
            "imgFood":"https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            "img":"https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
            "title":"Người dùng Putera đã đặt hàng",
            "time":"04:52:40 Mar",
            "imgFood":"https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            "img":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            "title":"Người dùng Putera đã đặt hàng",
            "time":"00:20:24 Mar",
            "imgFood":"https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
    ]
  return (
    <> 
    <div className="Header-container d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <div className="d-flex align-items-center">
            <ul className="header-toast d-flex align-items-center">
                <li className="position-relative">
                    <span onClick={() => setNewToast(newToast ? false:true)}><i className="fa-solid fa-bell"></i></span>
                    <ul className={`position-absolute ${newToast ? "d-block":"d-none"}`}>
                        {toast.map((item, index) => {
                            return <li onClick={() => setNewToast(false)} key={index} className="d-flex align-items-center">
                                        <img className="toast-img" src={item.img} alt="/" />
                                        <Link to="/">
                                            <h4>{item.title}</h4>
                                            <span>{item.time}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </li>
            </ul>
            <div className="user d-flex align-items-center">
                <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="cheff" />
                <div>
                    <h3>Gordon Ramsay</h3>
                    <span>Super Admin</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;