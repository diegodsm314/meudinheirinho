import { React, useEffect, useState, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import GlobalContext from "../../context/GlobalContext";
import image from '../../../public/vite.svg';
import { Login } from '../Login/Login';
import { Expense } from '../Expense/Expense';
import '../../App.css';
import './Header.css';


export function Header(props) {
    const globalCtx = useContext(GlobalContext);
    const [nome, setNome] = useState("");

    useEffect(() => {
        setNome(globalCtx.login)
    }, [globalCtx])

    return (
        <header>
            <Navbar key='lg' expand='lg' id='navbar' variant="dark">
                <Container fluid>
                    <Navbar.Brand className='logo' href="#">
                        <img src={image} alt="logo" />
                        <p className='headerIcon'>Meu dinheirinho</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
                    <Navbar.Offcanvas
                        id='offcanvas'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg' className='logo'>
                                <img src={image} alt="logo" />
                                <p className='headerIcon'>Meu dinheirinho</p>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 login">
                                <p className="name">Seja bem vindo {nome}</p>
                            </Nav>
                            <div className="buttons mb-2">
                                <Login></Login>
                                <Expense switch={props.switch}></Expense>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}