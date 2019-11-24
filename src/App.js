import React, { Component } from 'react';
import EmployeeList from './employees/EmployeeList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <EmployeeList />
      </div>
    )
  }
}

export default App