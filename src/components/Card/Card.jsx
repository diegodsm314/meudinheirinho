import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import data from '../../services/data';
import { ArrowUpCircle, ArrowDownCircle, CurrencyDollar} from 'react-bootstrap-icons';

function CardUnique() {
  const [counts, setCounts] = useState([]);
  const [expen, setExpen] = useState(12.01);
  const [value, setValue] = useState(9.98);

  useEffect(() => {
    data.get("count").then(({ data }) => {
      setCounts(data);
    })
    //console.log(counts);
  }, [])
  return (
    <div className="summary">
      <Card className="card white-card">
        <Card.Body>
          <div className='div-card-title'>
            <Card.Title className="card-title">Entradas</Card.Title>
            <ArrowUpCircle className='icon-card arrow-up'/>
          </div>
          <Card.Text className="card-text">
            R$ {value}
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
            R$ {expen}
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