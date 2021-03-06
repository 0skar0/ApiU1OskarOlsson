import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import styles from './styling.module.css';
import Form from 'react-bootstrap/Form';


class TableComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: null,
      email: '',
      name: '',
      ort: '',
      gata: '',
      postnummer: 0
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:2000/students')
    .then((resp) => resp.json())
    .then((response) => {
      this.setState({
        students: response
      })
    })
  }

  refreshTable = (id) => {
    let studentsArr = this.state.students;
    let newStudentArr = studentsArr.filter(student => student._id !== id)
    this.setState({
      students: newStudentArr
    })
  }

  deleteOneUser = (id) => {
    fetch('http://localhost:2000/students/' + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    }).then(() => {
      this.refreshTable(id);
    })
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
      this.setState(prevState => ({
        students: [...prevState.students, student]
      }))
    })

  }

  onUpdate = (inputVal) => {
    this.setState({
      [inputVal.target.name]: inputVal.target.value
    })
  }
  render() {
    const {students} = this.state;

    if (!students) {
      return <p>HEJHEJEJ</p>
    }

    return(
      <Fragment>
        <div className={styles.tableWrapper}>
          <h1>Welcome to BongBong!</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) =>
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>{student.address.gata + ', ' + student.address.ort}</td>
                  <td>{student.email}</td>
                  <td><Button variant="danger" onClick={() => this.deleteOneUser(student._id)}>Delete User</Button></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

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
      </Fragment>
    )
  }
}

export default TableComponent;
