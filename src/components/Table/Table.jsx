import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import './Table.css';
import data from "../../services/data";
import GlobalContext from "../../context/GlobalContext";

export function TableUnique() {
    const globalCtx = useContext(GlobalContext);
    const [tab,setTab] = useState();
    const [entry,setEntry] = useState([]);

    useEffect(() => {
        data.get("count").then(function (response){
            const aux = response.data;
            const baux = aux.filter(user => user.idUser == globalCtx.idUser)
            setTab(baux[0]);
            setEntry(baux[0].entry);
        })  
    }, [globalCtx]);

    console.log(entry);
    
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
                {entry.map((it,id)=>{
                            return(
                                <tr>
                                <td key={id}>{it.title}</td>
                                <td key={id}>{it.price}</td>
                                <td key={id}>{it.category}</td>
                                <td key={id}>{it.date}</td>
                            </tr>
                            )
                        })}

                </tbody>
            </Table>
        </div>
    )
}