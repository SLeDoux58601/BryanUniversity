import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MovieContextProvider} from './components/movieContext'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorker.unregister();