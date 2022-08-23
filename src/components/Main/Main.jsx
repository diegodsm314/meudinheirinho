import React from "react";
import { Container, Row } from 'react-bootstrap';
import CardDesktop from "../CardDesktop/CardDesktop";
import TableUnique from "../Table/Table";
import List  from "../List/List";
import CardMobile from "../CardMobile/CardMobile";


export function Main(props) {
    return (
        <>
            <Container>
                <Row>
                    <CardMobile switch={props.switch} id="card-mobile"></CardMobile>
                    <CardDesktop switch={props.switch} id="card-desktop"></CardDesktop>
                </Row>
                <Row>
                    <TableUnique switch={props.switch} id="table"></TableUnique>
                    <List switch={props.switch} id="list"></List>
                </Row>
            </Container>
        </>
    )
}