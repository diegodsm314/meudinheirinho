import { React, useEffect, useState } from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import user from '../services/user'
import image from '../../public/vite.svg'


export function Header(){
    const [nomes,setNomes] = useState([]);
    const [nome,setNome] = useState("ABC");
    

    useEffect(()=> {
        //setar o usuario IMCOMPLETO
        user.get("users").then(({data}) => {
            setNomes(data);
            //setNome(data.user);
        })
    },[])

    return (
        <>
        <img src={image} alt="logo" />
        <p className='headerIcon'>Meu dinheirinho</p>
        <p className="name">Seja bem vindo {nome}</p>
        <div className="mb-2">
            <Button
                variant="secondary"
                size="lg"
                >
                    Nova transação
                </Button>
        </div>
        </>
    )
}