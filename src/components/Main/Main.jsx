import React from "react";
import CardUnique from "./Card";
import { Login } from "../Login/Login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function Main() {
    return (
        <>
            <Container>
                <Row>
                    <CardUnique></CardUnique>
                </Row>
            </Container>
        </>
    )
}