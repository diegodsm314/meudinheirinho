import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css';
import GlobalContext from "../../context/GlobalContext";
import Modal from 'react-bootstrap/Modal';


export function Login() {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(active);

    const globalCtx = useContext(GlobalContext);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    console.log(globalCtx);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>
            <div className="formulary">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Entrar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Login"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Login" onChange={(evento) => setUser(evento.target.value)} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" onChange={(evento) => setPass(evento.target.value)} />
                            </FloatingLabel>
                            <div className="div-btn-ok">
                                <Button className="button-ok" onClick={() => { globalCtx.onLogin(user, pass, 99); handleClose() }}>Ok</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}