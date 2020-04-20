import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {UglyContextProvider} from './components/uglycontext'

ReactDOM.render(
  <React.StrictMode>
    <UglyContextProvider>
      <App />
    </UglyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);