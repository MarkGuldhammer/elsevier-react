import React, { Component } from 'react'

class EmployeeDetail extends Component {
  render() {
    const {data} = this.props
    const rows = data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.gender}</td>
          <td>{row.company}</td>
          <td>{data.email}</td>
          <td>{row.isActive ? 'true' : 'false'}</td>
          <td>{row.picture}</td>
        </tr>
      );
    })

    return rows;
  }
}

export default EmployeeDetail