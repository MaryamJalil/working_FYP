import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import medi1 from './img/medi1.jfif';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class Pharmacypicture extends Component {
  render() {
    return (
      <div>
        <Container>
  <Row>
  
    <Col xs={6} md={4} style={{marginLeft:"60px",marginTop:"30px" }} >
      <Image src={medi1} thumbnail />
    </Col>

    <Col style={{marginLeft:"60px",marginTop:"30px"}}>
    <Card style={{ width: '35rem' ,backgroundColor:"#2a9d8f"}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>
       UTI Treatment for Cats, Urinary Tract & Bladder Formula for Cats</Card.Title>
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
    <p>We don't know when or if this item will be back in stock.
★ QUICK RELIEF - Natural Cat UTI Treatment combats bladder and kidney infections
★ SOOTHING relief from UTI pain and inflammation
★ EASY OF USE - Easy to administer, simply apply to food or treats
★ MADE IN UNITED STATES - Produced an FDA certified facility in Colorado
★ NO-RISK GUARANTEE - 100% money back guarantee if you're not delighted after the first bottle
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
