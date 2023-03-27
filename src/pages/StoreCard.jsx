import React from 'react'
import {Card, Col,Button} from 'react-bootstrap';
import Counter from './Counter';

const StoreCard = (props) => {
  return (
  <Col sm={6} md={4} >
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}
        </Card.Text>
        <Button variant="primary">Add to wishlist</Button>
        <Counter/>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default StoreCard