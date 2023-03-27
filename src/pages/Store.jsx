import axios from 'axios';
import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap';
import StoreCard from './StoreCard';
export class Store extends Component {
  constructor(){
    super();
    this.state={
      products:[]
    }
  }
  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
         .then(res=>this.setState({products:res.data}))
  }
  render() {
    return (
      <Container>
         <Row className='g-5 mt-3'>
                    {this.state.products.map(item  => {
                        return <StoreCard title={item.title} img={item.image} price={item.price} key={item.id}/>
                    })}
                </Row>
      </Container>
    )
  }
}

export default Store