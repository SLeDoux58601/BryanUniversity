import React, {Component} from 'react';

// document.getElementByClassName("add").onclick = function() {
//   var text = document.getElementByClassName("input").value
//   let li = "<li>" + text + "</li>"
//   document.getElementById("list").appendChild(li)
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  listName = () => {
    document.getElementByClassName("add").onclick = function() {
      var text = document.getElementByClassName("input").value
      let li = "<li>" + text + "</li>"
      document.getElementById("list").appendChild(li)
    }
  }

  // document.getElementByClassName("add").onclick = function() {
  //   let text = document.getElementByClassName("input").value
  //   let li = "<li>" + text + "</li>"
  //   document.getElementById("list").appendChild(li)
  // }
  // addName = () => {
  //   let ul = document.getElementById("list")
  //   let li = document.createElement("li");
  //   li.appendChild(document.createTextNode(this.state.firstName))
  //   ul.appendChild(li)
  // }

  // appendName() {
  //   this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
  //   this.setState({
  //      showdata : this.displayData,
  //      postVal : ""
  //   });
 
  // }

  // listName = () => {
  //   const [value, setValue] = React.useState('');
  //   const [list, setList] = React.ustState(firstName);
  //   const handleChange = event => {
  //     setValue(event.target.value)
  //   }
  // }

 
  render() {
    return (
      <form>
        <input className="input" type="text" placeholder="First Name" onChange={this.handleChange} />
        <h1>{this.state.firstName}</h1>
        <button type="button" className="add" onSubmit="listName()">Add Name</button>
      </form>
    );
    }
}


export default App;
