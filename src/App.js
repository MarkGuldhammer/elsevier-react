import React, {Component} from 'react';
import EmployeeTable from './employees/EmployeeTable';
import EmployeeData from './json/generated.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: EmployeeData
    }
    
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    this.setState({
      data: EmployeeData.sort( (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))
    })
  }
  
  render() {
    return (
      <div>
        <EmployeeTable 
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App