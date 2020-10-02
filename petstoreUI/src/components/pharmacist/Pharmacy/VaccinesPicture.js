import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import catvaccine from './img/catvaccine.jfif';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class VaccinesPicture extends Component {
  render() {
    return (
      <div>
        <Container>
  <Row>
  
    <Col xs={6} md={4} style={{marginLeft:"60px",marginTop:"30px"}}>
      <Image src={catvaccine} thumbnail />
    </Col>

    <Col style={{marginLeft:"60px",marginTop:"30px"}}>
    <Card style={{ width: '35rem' ,backgroundColor:"#2a9d8f"}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>
    Feline (Cat) Vaccination</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Row>
      <Col>
    <p style={{fontWeight:"bold"}}>expiry date</p>
    </Col>
    <Col>
    <p>08-08-2021</p>
    </Col>
    </Row>
    <Row>
      <Col>
    <p style={{fontWeight:"bold"}}>Pet Category</p>
    </Col>
    <Col>
    <p>Cats</p>
    </Col>
    </Row>
    <Row>
      <Col>
    <p style={{fontWeight:"bold"}}>Cat Breed</p>
    </Col>
    <Col>
    <p>For All</p>
    </Col>
    </Row>
    <Row>
      <Col>
    <p style={{fontWeight:"bold"}}>Quantity</p>
    </Col>
    <Col>
    <p>200mg</p>
    </Col>
    </Row>
    <Row>
      <Col>
    <p style={{fontWeight:"bold"}}>Specifications</p>
    </Col>
    <Col>
    <p>In general, guidelines for vaccination of cats have been strongly influenced by the appearance of vaccine-associated sarcomas in cats, 
        and in particular their epidemiologic association with feline leukemia virus vaccines and killed rabies virus vaccines. Thus, 
        there is clear evidence for minimizing frequency of vaccination in cats. The recommendations below have been made in light of 
        the AVMA/AAHA/AAFP/VCS task force recommendations on vaccine-associated sarcomas in cats. Risk factors for sarcomas should be 
        discussed with cat owners at the time of examination. If a cat develops a palpable granuloma at the site of previous vaccination,
         the benefits vs risks of future vaccinations should be carefully considered.
         All vaccine-associated sarcomas should be reported to the vaccine manufacturer.
</p>
    </Col>
    </Row>




    <Button variant="dark">Buy Now</Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
      </div>
    )
  }
}
