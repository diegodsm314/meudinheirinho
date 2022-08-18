import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css';
import GlobalContext from "../../context/GlobalContext";


export function Login() {
    const globalCtx = useContext(GlobalContext);
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");

    console.log(globalCtx);
    

    return (
        <div className="formulary">
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
                    <Button className="button-ok" onClick={()=>{globalCtx.onLogin(user,pass,99)}}>Ok</Button>
                </div>
                
            </Form>
        </div>
    )
}