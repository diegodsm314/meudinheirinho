import React, { useContext, useState, useEffect } from 'react';
import { Button, ToggleButtonGroup, ButtonToolbar, ToggleButton, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import './Expense.css';
import GlobalContext from "../../context/GlobalContext";
import data from '../../services/data';


export function Expense(props) {
    const globalCtx = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const [tab, setTab] = useState();
    const [entry, setEntry] = useState([]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function character(text) {
        if (text < 10) {
            return `0${text}`
        }
        else return text;
    }

    useEffect(() => {
        data.get("count").then(function (response) {
            const aux = response.data;
            const baux = aux.filter(user => user.idUser == globalCtx.idUser)
            setTab(baux[0]);
            setEntry(baux[0].entry);
        })
    }, [globalCtx]);

    const dating = () => {
        const today = new Date();
        return `${character(today.getDay())}/${character(today.getMonth())}/${today.getFullYear()}`
    }

    const [price, setPrice] = useState(0.0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(dating);
    const [status, setStatus] = useState(false);

    function newPost(){
        entry.push({
            "price": status ? price: (-price),
            "title": title,
            "category": category,
            "date": date,
            "statusEntry": status
        })
        props.switch();
        data.put(`/count/${globalCtx.idUser-1000}`,{
            "id": tab.id,
            "idUser": tab.idUser,
            "countExpense": !status ? ((tab.countExpense)+price) : (tab.countExpense),
            "countValue": !status ? (tab.countValue) :((tab.countValue)+price),
            "entry": entry
        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <>
            <Button size="lg" className='btn-transaction' onClick={handleShow}>
                Nova transa????o
            </Button>
            <Modal show={show} onHide={handleClose}>
                <div className="formulary">
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastrar Transa????o</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome" onChange={(evento) => setTitle(evento.target.value)} />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Pre??o"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Pre??o" onChange={(evento) => setPrice(parseFloat(evento.target.value))} />
                            </FloatingLabel>

                            <ButtonToolbar>
                                <ToggleButtonGroup className="me-2 group-outline"  type="radio" name="options">
                                    <ToggleButton id="tbg-radio-1" value={1} className="outline-border btn-income" variant="outline-success" onClick={() => { setStatus(true) }}> <ArrowUpCircle className='icon-card arrow-up' /> Entrada
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2} className="outline-border btn-outcome" variant="outline-danger" onClick={() => { setStatus(false) }}> <ArrowDownCircle className='icon-card arrow-down' /> Sa??da
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Categoria" onChange={(evento) => setCategory(evento.target.value)} />
                            </FloatingLabel>

                            <div className="div-btn-update">
                                <Button className="button-update" onClick={() => {newPost();handleClose()}}>Cadastrar</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}