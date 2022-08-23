import { React, useEffect, useState, useContext } from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import './List.css';
import data from "../../services/data";
import GlobalContext from "../../context/GlobalContext";

export default function List(props) {
    const globalCtx = useContext(GlobalContext);
    const [tab, setTab] = useState();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        data.get("count").then(function (response) {
            const aux = response.data;
            const baux = aux.filter(user => user.idUser == globalCtx.idUser)
            setTab(baux[0]);
            setEntry(baux[0].entry);
        })
    }, [globalCtx, props.switch]);

    function handleClass(item) {
        if ((item) < 0) {
          return "red-value";
        }
        else {
          return "green-value";
        }
      }

    return (
        <div className="list">
            <div>
                <h2 className="title">Listagem</h2>
                <span className="description"><p>{entry.length} itens</p></span>
            </div>
            <ListGroup>
                {entry.map((it, id) => {
                    return (
                        <>
                            <ListGroup.Item className="item-a" key={id}>
                                <Card border="light" className="list-card">
                                    <Card.Body>
                                        <Card.Title className="list-card-title">{it.title}</Card.Title>
                                        <Card.Text className={handleClass(it.price)}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(it.price)}</Card.Text>
                                        <div className="d-flex justify-content-between mt-4 mb-0">
                                            <p className="details">
                                                {it.category}
                                            </p>
                                            <p className="details">
                                                {it.date}
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                        </>
                    )
                })}
            </ListGroup>
        </div>
    )
}