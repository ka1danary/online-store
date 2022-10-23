import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    // в зависимости от того, авторизован пользователь или нет, меню будет разное
    const {user} = useContext(Context)
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <NavLink style = {{color : "white"}} to={SHOP_ROUTE}>Name</NavLink>
                {user.isAuth ?
                    <Nav className="me-auto" style = {{color : "white"}}>
                        <Button variant= {"outline-light"} href="#home">Admin</Button>
                        <Button variant= {"outline-light"} href="#home">Login</Button>
                    </Nav>
                    :
                    <Nav className="me-auto" style = {{color : "white"}}>
                        <Button variant= {"outline-light"} onClick={() => user.setIsAuth(true)}>Registration</Button>
                    </Nav>
                }
            </Navbar>
        </Container>

    );
});

export default NavBar;