import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Counter from './Counter'
import store from './store'


function App() {
  return (
    <div>
      <Provider store={store}>
     <Counter />
     </Provider>
    </div>
  );
}



export default App;