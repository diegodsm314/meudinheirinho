import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import './Table.css';
import data from "../../services/data";
import GlobalContext from "../../context/GlobalContext";

export function TableUnique() {
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
    }, [globalCtx]);

    return (
        <div className="table">
            <Table borderless>
                <thead>
                    <tr>
                        <th className="row-title">Título</th>
                        <th className="row-title">Valor</th>
                        <th className="row-title">Categoria</th>
                        <th className="row-title">Data</th>
                    </tr>
                </thead>
                <tbody className="row-item">
                    {entry.map((it, id) => {
                        return (
                            <tr key={id}>
                                <td >{it.title}</td>
                                <td >{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(it.price)}</td>
                                <td >{it.category}</td>
                                <td >{it.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}