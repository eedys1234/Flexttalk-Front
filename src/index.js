import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { rootReducer } from './redux/reducers/RootReducer.js';
import logger from 'redux-logger';
import rootSaga from './redux/sagas/RootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

import './styles/cmmn.css';


const sagaMiddleware = createSagaMiddleware();
const enhancer = process.env.NODE_ENV === "production" 
              ? compose(applyMiddleware(sagaMiddleware))
              : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

const store =  createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);