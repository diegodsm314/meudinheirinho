import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function TableUnique() {
    const [tab,setTab] = useState([]);

    useEffect(() => {
        //setar o usuario IMCOMPLETO
        user.get("count").then(({ data }) => {
            setTab(data);
        })
    }, [])
    

    return (
        <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{"A"}</td>
                        <td>{"B"}</td>
                        <td>{"C"}</td>
                        <td>{"D"}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}