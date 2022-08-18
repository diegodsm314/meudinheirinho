import { React, useEffect, useState, useContext } from 'react';
import '../../App.css';
import './Header.css';
import Button from 'react-bootstrap/Button';
import image from '../../../public/vite.svg'
import GlobalContext from "../../context/GlobalContext";


export function Header() {
    const globalCtx = useContext(GlobalContext);
    const [nome, setNome] = useState("");

    useEffect(()=>{
        setNome(globalCtx.login)
    },[globalCtx])

    return (
        <header>
            <div className='logo'>
                <img src={image} alt="logo"/>
                <p className='headerIcon'>Meu dinheirinho</p>
            </div>

            <p className="name">Seja bem vindo {nome}</p>
            <div className="mb-2">
                <Button
                    variant="secondary"
                    size="lg"
                    className='btn-transaction'
                >
                    Nova transação
                </Button>
            </div>
        </header>
    )
}