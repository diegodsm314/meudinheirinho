import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Modal.css';
import Modal from 'react-bootstrap/Modal';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';


export function ModalUnique() {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function character(text){
        if(text<10){
            return `0${text}`
        }
        else return text;
    }

    const dating = () => {
        const today = new Date();
        return `${character(today.getDay())}/${character(today.getMonth())}/${today.getFullYear()}`
    }

    const [price, setPrice] = useState(0.0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(dating);
    const [status, setStatus] = useState(false);

    return (
        <>
            <Button size="lg" className='btn-transaction' onClick={handleShow}>
                    Nova transação
            </Button>
                <Modal show={show} onHide={handleClose}>
            <div className="formulary">
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastrar Transação</Modal.Title>
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
                                label="Preço"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Preço" onChange={(evento) => setPrice(evento.target.value)} />
                            </FloatingLabel>
                            <div className="flex-btn">
                                <Button className="outline-border" variant="outline" onClick={() => {setStatus(true)}}> <ArrowUpCircle className='icon-card arrow-up'/> Entrada</Button>
                                <Button className="outline-border" variant="outline"  onClick={() => {setStatus(false)}}> <ArrowDownCircle className='icon-card arrow-down'/> Saída</Button>
                            </div>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Categoria" onChange={(evento) => setCategory(evento.target.value)} />
                            </FloatingLabel>

                            <div className="div-btn-update">
                                <Button className="button-update" onClick={() => {}}>Cadastrar</Button>
                            </div>
                        </Form>
                    </Modal.Body>
            </div>
                </Modal>
        </>
    )
}