import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = ({ data }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.Imagen} className='img-fluid' />
      <Card.Body>
        <Card.Title>{data.Titulo}</Card.Title>
        <Card.Text>
          {data.Descripcion}
        </Card.Text>
        <Button variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;