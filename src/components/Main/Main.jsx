import React from "react";
import CardUnique from "../Card/Card";
import { Login } from "../Login/Login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function Main() {
    return (
        <>
            <Container>
                <Row>
                    <CardUnique></CardUnique>
                </Row>
            </Container>
            <Login></Login>
        </>
    )
}