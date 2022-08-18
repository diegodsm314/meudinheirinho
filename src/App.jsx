import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Card } from 'react-bootstrap';
import GlobalProvider from './context/GlobalProvider';

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
    </GlobalProvider>
  )
}

export default App
