import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './Table.css';

export function TableUnique() {
    const [tab,setTab] = useState([]);

    // useEffect(() => {
    //     //setar o usuario INCOMPLETO
    //     data.get("count").then(({ data }) => {
    //         setTab(data);
    //     })
    // }, [])
    

    return (
        <div className="table">
            <Table>
                <thead>
                    <tr>
                        <th className="row-title">Título</th>
                        <th className="row-title">Valor</th>
                        <th className="row-title">Categoria</th>
                        <th className="row-title">Data</th>
                    </tr>
                </thead>
                <tbody className="row-item">
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