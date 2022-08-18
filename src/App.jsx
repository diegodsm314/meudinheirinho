import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Card } from 'react-bootstrap';
import { Login } from './components/Login/Login';
import GlobalProvider from './context/GlobalProvider';
import Button from 'react-bootstrap/Button';

function App() {
  const handleCss = () => {
    setActive(!active);
    return active ? "showButton" : "closedButton";
  }


  return (
    <GlobalProvider>
      <Header></Header>
      <Main>
        <Card></Card>
      </Main>
      <Login></Login>
    </GlobalProvider>
  )
}

export default App
