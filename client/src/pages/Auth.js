import React from 'react';
import Container from "react-bootstrap/Container";
import './styles/Auth.css'
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation() // позволяет отслеживать маршруты в строке поиска (поле pathname )
    const isLogin = location.pathname === LOGIN_ROUTE // true если маршрут совпадает роутом
        // иначе страница регистрации
    return (
        <Container className="auth-container">
            <h2 className="text"> {isLogin ? 'Registration' : 'Login'} </h2>

            <form className="center" name="comment" action="" method="post">
                <div className="reg-container">
                    <p className="comment_form_field">Login</p>
                    <input required type="text" name="login" placeholder="" maxLength="10" className="form_reg"/>
                </div>

                <div className="reg-container">
                    <p className="comment_form_field">Password</p>
                    <input required type="password" name="password" placeholder="" maxLength="10" className="form_reg"/>

                </div>

                {isLogin ?
                    <input className="buttonSearch" id="button_reg" type="submit" name="submit" value="Registration"/>
                :
                    <input className="buttonSearch" id="button_reg" type="submit" name="submit" value="Login"/>
                }


                {isLogin ?
                    <div className="log-conteiner-form">
                        <NavLink to={REGISTRATION_ROUTE}>I don't have a profile</NavLink>
                    </div>

                    :

                    <div className="log-conteiner-form">
                        <NavLink to={LOGIN_ROUTE}>I have a profile</NavLink>
                    </div>
                }




            </form>
        </Container>
    );
};

export default Auth;