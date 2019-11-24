import React, { Component } from 'react'

class EmployeeDetail extends Component {
  render() {
    const {data} = this.props

    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.gender}</td>
        <td>{data.company}</td>
        <td>{data.email}</td>
        <td>{data.isActive ? 'true' : 'false'}</td>
        <td>{data.picture}</td>
      </tr>
    );
  }
}

export default EmployeeDetail