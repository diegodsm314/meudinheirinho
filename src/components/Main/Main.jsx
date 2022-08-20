import React from "react";
import { Container, Row } from 'react-bootstrap';
import CardDesktop from "../CardDesktop/CardDesktop";
import TableUnique from "../Table/Table";
import List  from "../List/List";


export function Main() {
    return (
        <>
            <Container>
                <Row>
                    <CardDesktop id="card-desktop"></CardDesktop>
                </Row>
                <Row>
                    <TableUnique id="table"></TableUnique>
                    <List id="list"></List>
                </Row>
            </Container>
        </>
    )
}