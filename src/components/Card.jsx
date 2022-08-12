import { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import user from '../services/user';

function CardUnique(){
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    user.get("count").then(({ data }) => {
      setCounts(data);
    })
    console.log(counts);
  }, [])
  return (
    <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="right" src="" />
      <Card.Body>
        <Card.Title>Entradas</Card.Title>
        <Card.Text>
          R$ {}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Saídas</Card.Title>
        <Card.Text>
          R$ {}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Total</Card.Title>
        <Card.Text>
          R$ {}
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>
  )
}

export default CardUnique;