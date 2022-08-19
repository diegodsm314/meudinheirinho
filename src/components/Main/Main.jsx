import React from "react";
import CardUnique from "../Card/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TableUnique } from "../Table/Table";


export function Main() {
    return (
        <>
            <Container>
                <Row>
                    <CardUnique></CardUnique>
                </Row>
                <Row>
                    <TableUnique></TableUnique>
                </Row>
            </Container>
        </>
    )
}