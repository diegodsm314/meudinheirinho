import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import data from '../../services/data';
import { ArrowUpCircle, ArrowDownCircle, CurrencyDollar} from 'react-bootstrap-icons';
import GlobalContext from '../../context/GlobalContext';

function CardUnique() {
  const [counts, setCounts] = useState([]);
  const [expen, setExpen] = useState(0.00);
  const [value, setValue] = useState(0.00);

  const globalCtx = useContext(GlobalContext);
  const [tab,setTab] = useState();

  useEffect(() => {
      data.get("count").then(function (response){
          const aux = response.data;
          const baux = aux.filter(user => user.idUser == globalCtx.idUser)
          setTab(baux[0]);
          setExpen(baux[0].countExpense);
          setValue(baux[0].countValue)
      })  
  }, [globalCtx]);

  console.log(tab);


  return (
    <div className="summary">
      <Card className="card white-card">
        <Card.Body>
          <div className='div-card-title'>
            <Card.Title className="card-title">Entradas</Card.Title>
            <ArrowUpCircle className='icon-card arrow-up'/>
          </div>
          <Card.Text className="card-text">
            R$ {(value).toFixed(2)}
            <span className='white-card'>Última entrada dia {}</span>
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
            R$ {(expen).toFixed(2)}
            <span className='white-card'>Última entrada dia {}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card green-card">
        <Card.Body>
          <div className='div-card-title'>
            <Card.Title className="card-title">Total</Card.Title>
            <CurrencyDollar className='icon-card'/>
          </div>
          <Card.Text className="card-text">
            R$ {(value-expen).toFixed(2)}
            <span className='span-green'>Última entrada dia {}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardUnique;