import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';



export function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


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
                <Button type="submit">Ok</Button>
            </Form>
        </div>
    )
}