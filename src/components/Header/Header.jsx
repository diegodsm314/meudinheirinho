import { React, useEffect, useState, useContext } from 'react';
import '../../App.css';
import './Header.css';
import Button from 'react-bootstrap/Button';
import image from '../../../public/vite.svg'
import GlobalContext from "../../context/GlobalContext";
import { Login } from '../Login/Login';


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
            <div className="login">
                <p className="name">Seja bem vindo {nome}</p>
            </div>
            <div className="buttons mb-2">
                <Login></Login>
                <Button size="lg" className='btn-transaction'>
                    Nova transação
                </Button>
            </div>
        </header>
    )
}