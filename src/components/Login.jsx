import React, { useState } from "react";
import { Form } from "react-bootstrap";



export function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


    return (
        <div className="formulary">
            <FloatingLabel
                controlId="floatingInput"
                label="Login"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Login" onChange={(evento)=>setUser(evento.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" onChange={(evento) => setPass(evento.target.value)} />
            </FloatingLabel>
        </div>
    )
}