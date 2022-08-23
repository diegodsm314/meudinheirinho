import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './CardDesktop.css';
import data from '../../services/data';
import { ArrowUpCircle, ArrowDownCircle, CurrencyDollar} from 'react-bootstrap-icons';
import GlobalContext from '../../context/GlobalContext';

function CardDesktop(props) {
  const globalCtx = useContext(GlobalContext);
  const [expen, setExpen] = useState(0.00);
  const [value, setValue] = useState(0.00);
  

  useEffect(() => {
      data.get("count").then(function (response){
          const aux = response.data;
          const baux = aux.filter(user => user.idUser == globalCtx.idUser)
          setExpen(baux[0].countExpense);
          setValue(baux[0].countValue)
      })  
  }, [globalCtx, props.switch]);


  function handleClass(){
    if((value-expen)<0){
      return "card red-card";
    }
    else{
      return "card green-card";
    }
  }

  return (
    <div className="summary-desktop">
      <Card className="card white-card">
        <Card.Body>
          <div className='div-card-title'>
            <Card.Title className="card-title">Entradas</Card.Title>
            <ArrowUpCircle className='icon-card arrow-up'/>
          </div>
          <Card.Text className="card-text">
            {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card white-card">
        <Card.Body>
        <div className='div-card-title'>
          <Card.Title className="card-title">Saídas</Card.Title>
          <ArrowDownCircle className='icon-card arrow-down'/>
        </div>
          <Card.Text className="card-text">
          {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(expen)}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={handleClass()}>
        <Card.Body>
          <div className='div-card-title'>
            <Card.Title className="card-title">Total</Card.Title>
            <CurrencyDollar className='icon-card'/>
          </div>
          <Card.Text className="card-text">
          {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value-expen)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardDesktop;