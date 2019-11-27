import React, {Component} from 'react';
import EmployeeTable from './employees/EmployeeTable';
import EmployeeData from './json/generated.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: EmployeeData,
      search: '',
      lastSortedKey: ''
    };

    this.timeout = 0;
    this.delay = 500;
    
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: EmployeeData.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
    });

    // If trying to the same column twice, reverse it.
    if (this.state.lastSortedKey === key) {
      this.setState({
        data: this.state.data.reverse(),
        lastSortedKey: ''
      });
    } else {
      this.setState({
        lastSortedKey: key
      });
    }
  }

  doSearch(event) {
    const searchString = event.target.value;

    // If timeout is set, clear it.
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    // Set new timeout and search.
    this.timeout = setTimeout(() => {
      this.setState({search: searchString});
    }, this.delay);
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
        <input type="text" placeholder="Search table..." onChange={this.doSearch.bind(this)} />
        <EmployeeTable 
          data={filteredData}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App