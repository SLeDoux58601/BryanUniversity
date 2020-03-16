import React, {Component} from 'react';
import Form from './Form'

class App extends Component {
  state = {
    fields: {}
  }
  onSubmit = (fields) => {
    this.setState({fields})
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    )
  }
}

export default App;