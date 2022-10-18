import React from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login-slice";
import "../Styles/Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Temporary from "./Temporary";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <header className="Header-css">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Redux Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link> </Nav.Link>
            <Nav.Link > <Temporary /> </Nav.Link>
            <Nav.Link className="Logout-icon">
            <button onClick={logoutHandler} className="Logout-btn">
            <LogoutIcon sx={{ fontSize: 50 }}/>
        </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  );
};

export default Header;



     
      