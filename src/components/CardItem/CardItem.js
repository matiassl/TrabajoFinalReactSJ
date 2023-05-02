import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = ({data}) => {
   
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} className='img-fluid'/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
          {/* <p>{data.category}</p> */}
        </Card.Text>
        <Button variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;