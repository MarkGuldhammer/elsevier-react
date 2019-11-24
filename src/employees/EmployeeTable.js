import React from 'react'

export default function EmployeeTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => props.sortBy('id')}>Id</button>
          </th>
          <th>
            <button onClick={() => props.sortBy('name')}>Name</button>
          </th>
          <th>
            <button onClick={() => props.sortBy('gender')}>Gender</button>
          </th>
          <th>
            <button onClick={() => props.sortBy('company')}>Company</button>
          </th>
          <th>
            <button onClick={() => props.sortBy('email')}>Email</button>
          </th>
          <th>Active</th>
          <th></th>
        </tr>
        </thead>
          <tbody>
            {
              props.data.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.gender}</td>
                  <td>{row.company}</td>
                  <td>{row.email}</td>
                  <td>{row.isActive ? 'true' : 'false'}</td>
                  <td><img src={row.picture} alt={row.name} title={row.name} /></td>
                </tr>
              ))
            }
          </tbody>
      </table>
    )
}