import React from 'react';
import './App.css';
import Output from './components/output'
import Input from './components/input'
//import uglycontext from './components/uglycontext'
// says unsaved Vars when i try to import

function App() {
  return (
    <div className="App">
      <Input></Input>
      <Output></Output>
    </div>
  );
}

export default App;
