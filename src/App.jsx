import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Main } from './components/Main/Main';
import { Card } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Main>
      <Card></Card>
    </Main>
    </>
  )
}

export default App
