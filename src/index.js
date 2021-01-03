//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reducer from './store/reducer/all';
import { createStore, applyMiddleware, compose} from 'redux';
import reportWebVitals from './reportWebVitals';

const composedEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore (reducer, composedEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
  );

reportWebVitals();
