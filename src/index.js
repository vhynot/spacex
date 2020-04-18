import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LoadingContextProvider} from './utilities/loadingContext/loadingContext'

ReactDOM.render(
  <LoadingContextProvider>
    <App />
  </LoadingContextProvider>,
  document.getElementById('root')
);
