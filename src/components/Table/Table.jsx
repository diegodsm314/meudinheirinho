import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import './Table.css';
import data from "../../services/data";
import GlobalContext from "../../context/GlobalContext";

export function TableUnique() {
    const globalCtx = useContext(GlobalContext);
    const [tab,setTab] = useState();

    useEffect(() => {
        data.get("count").then(function (response){
            const aux = response.data;
            const baux = aux.filter(user => user.idUser == globalCtx.idUser)
            setTab(baux[0]);
        })  
    }, [globalCtx]);

    console.log(tab);
    

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
                        <td>{"Sem"}</td>
                        <td>{"acesso"}</td>
                        <td>{"de"}</td>
                        <td>{"dados"}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}