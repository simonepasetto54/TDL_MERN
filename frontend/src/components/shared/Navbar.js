import Navbar from 'react-bootstrap/Navbar'
import React from "react";
import { Container } from 'react-bootstrap';
import logo from '../../assets/imgs/logo.png';
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        TDL
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}


export default NavBar