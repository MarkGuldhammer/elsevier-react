import React, { Component } from 'react';
import EmployeeData from '../json/generated.json';
import EmployeeDetail from './EmployeeDetail';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Company</th>
        <th>Email</th>
        <th>Is Active</th>
        <th>Picture</th>
      </tr>
    </thead>
  )
}

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <table>
          <TableHeader />
          <tbody><EmployeeDetail data={EmployeeData}/></tbody>
        </table>
      </div>
    )
  }
}

export default EmployeeList