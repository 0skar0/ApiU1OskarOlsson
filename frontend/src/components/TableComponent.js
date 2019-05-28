import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'


class TableComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: null,
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

  deleteOneUser = (id) => {
    fetch('http://localhost:2000/students/' + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    }).then((res) => {
      console.log(res);
    })
  }
  render() {
    const {students} = this.state;

    if (!students) {
      return <p>HEJHEJEJ</p>
    }
    return(
      <div>
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
                <td>{student.address.gata + ' ' + student.address.ort}</td>
                <td>{student.email}</td>
                <td><Button variant="danger" onClick={() => this.deleteOneUser(student._id)}>Delete User</Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TableComponent;
