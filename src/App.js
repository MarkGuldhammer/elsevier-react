import React, {Component} from 'react';
import EmployeeTable from './employees/EmployeeTable';
import EmployeeData from './json/generated.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: EmployeeData,
      search: ''
    };
    
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: EmployeeData.sort( (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 10)});
  }
  
  render() {
    let filteredData = this.state.data.filter(
      (employee) => {
        return employee.name.indexOf(this.state.search.toLowerCase()) !== -1 || 
          employee.email.indexOf(this.state.search.toLowerCase()) !== -1 ||
          employee.company.indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )

    return (
      <div className='employeeTable'>
        <input type="text" placeholder="Search table..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} 
        />
        <EmployeeTable 
          data={filteredData}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App