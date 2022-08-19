import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css';
import GlobalContext from "../../context/GlobalContext";
import Modal from 'react-bootstrap/Modal';
import data from "../../services/data";


export function Login() {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [log,setLog] = useState("Login");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const globalCtx = useContext(GlobalContext);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        data.get("users").then(function (response){
            setUsers(response.data);
        })
        
      }, [])
    
    function setLogin(user, password){
        let stats = true;
        users.map((it)=>{
            if(it.user==user){
                if (it.password==password) {
                    stats=false;
                    setLog(it.user);
                    globalCtx.onLogin(user, pass, it.idUser);
                }
                else{
                    console.log("Senha incorreta");
                }
            }
        })
        if(stats){
            console.log("Usuario não encontrado");
        }
    }

    return (
        <>
            <Button className="btn-login" size="lg" onClick={handleShow}>
                {log}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <div className="formulary">
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
                                <Button className="button-ok" onClick={() => { setLogin(user,pass); handleClose() }}>Ok</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}