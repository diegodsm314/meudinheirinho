import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Card } from 'react-bootstrap';
import GlobalProvider from './context/GlobalProvider';
import { useState } from 'react';

function App() {
  const [dandan,setDandan] = useState(false);
  console.log(dandan);

  return (
    <GlobalProvider>
      <Header switch={()=>{setDandan(!dandan)}}></Header>
      <Main switch={dandan}>
        <Card></Card>
      </Main>
    </GlobalProvider>
  )
}

export default App
