import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './styling.module.css';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      ort: '',
      gata: '',
      postnummer: 0
    }
  }

  handleEvent = (e) => {
    e.preventDefault();
    const student = {
      email: this.state.email,
      name: this.state.name,
        address: {
          ort: this.state.ort,
          gata: this.state.gata,
          postnummer: this.state.postnummer
        }
    }
    fetch('http://localhost:2000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    }).then((res) => {
      res.ok ? alert('User created') : alert('Something went wrong')
    })

  }

  onUpdate = (inputVal) => {
    this.setState({
      [inputVal.target.name]: inputVal.target.value
    })
  }

  render() {
    return(

        <div className={styles.divstyle}>

          <Form className={styles.formStyle} onSubmit={this.handleEvent}>
            <h2>Create new user</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.email} name="email" onChange={this.onUpdate} type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control value={this.state.name} name="name" onChange={this.onUpdate} type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Street</Form.Label>
              <Form.Control value={this.state.gata} name="gata" onChange={this.onUpdate} type="text" placeholder="Enter your street address" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control value={this.state.postnummer} name="postnummer" onChange={this.onUpdate} type="text" placeholder="Enter your zipcode" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control value={this.state.ort} name="ort" onChange={this.onUpdate} type="text" placeholder="Enter your city" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create New User
            </Button>
          </Form>
        </div>

    )
  }
}

export default FormComponent;
