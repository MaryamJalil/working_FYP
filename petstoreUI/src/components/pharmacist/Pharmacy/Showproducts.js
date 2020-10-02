import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'


export default class Showproducts extends Component {
    render() {
        return (
            <div>
                 <div style={{marginLeft:"45px"}}>
            <Breadcrumb>
  <Breadcrumb.Item href="/addproducts">Add Pet Products</Breadcrumb.Item>
  <Breadcrumb.Item href="/product">
    Products
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/save">Save </Breadcrumb.Item>
</Breadcrumb>
</div>
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Do you want to save changes?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Save changes to show products to the user.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
            </div>
        )
    }
}
