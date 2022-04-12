import React, {useState, useContext} from 'react';
import "./Login.css";
import { useForm } from 'react-hook-form';
import {LoginContext} from "../../hooks/acceptLogin"

const Login = () => {
    const context = useContext(LoginContext)
    const [error, setError] = useState("")
    const onSubmit = data => {
        context.setAccept(data.username === "admin" && data.password === "Admin123456" ? true : false)
        localStorage.setItem("accept", `${data.username === "admin" && data.password === "Admin123456" ? "true" : "false"}`)
        setError(data.username === "admin" && data.password === "Admin123456" ? "" : "Sai tài khoản hoặc mật khẩu")
    };
    const { register, handleSubmit, formState: { errors }, } = useForm()

  return (
    <>
    <div className="login">
        <div className="d-block">
            <div className="User-modal">
                <div className="modal-overley"></div>
                <div className="modal-box">
                    <div className="Sign-In-Box">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <h1 className="form__title">Đăng nhập</h1>
                            <div className="form__input-group">
                                <span><i className="fas fa-user"></i></span>
                                <input className="form__input" placeholder='Tài khoản' type="text"
                                    {...register("username", {
                                        required: true,
                                        pattern: /^[a-z0-9_-]{3,16}$/
                                    })}
                                />
                                {errors.username && <p className="error-mess">Hãy nhập đúng tài khoản của bạn</p>}
                            </div>
                            <div className="form__input-group">
                                <span><i className="fas fa-lock"></i></span>
                                <input className="form__input" placeholder='Mật khẩu' type="password"
                                    {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                    })}
                                />
                                {errors.password && <p className="error-mess">Hãy nhập đúng mật khẩu của bạn</p>}
                            </div>
                            <span className="conguration">{error}</span>
                            <button className="form__button" type="submit">Đăng nhập</button>
                            <p className="form__text"><a className="form__link" href="/" id="linkCreateAccount">Bạn đã quên mật khẩu ? <span>Tìm tài khoản</span></a></p>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login