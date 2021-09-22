import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import RootReducer from './redux/reducers/RootReducer.js';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === "production" 
              ? compose(applyMiddleware(sagaMiddleware))
              : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

const store =  createStore(RootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
