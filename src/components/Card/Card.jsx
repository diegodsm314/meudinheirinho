import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import user from '../../services/data';

function CardUnique() {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    user.get("count").then(({ data }) => {
      setCounts(data);
    })
    console.log(counts);
  }, [])
  return (
    <div className="summary">
      <Card className="card white-card">
        <Card.Body>
          <Card.Title className="card-title">Entradas</Card.Title>
          <Card.Text className="card-text">
            R$ { }
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card white-card">
        <Card.Body>
          <Card.Title className="card-title">Saídas</Card.Title>
          <Card.Text className="card-text">
            R$ { }
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card green-card">
        <Card.Body>
          <Card.Title className="card-title">Total</Card.Title>
          <Card.Text className="card-text">
            R$ { }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardUnique;