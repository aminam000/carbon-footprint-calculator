import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// redux imports 
import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger'
import store from './redux/store';

import App from './components/App/App';

//create events, state and reducers



// const vehicle = (state = [], action) => {
//   if (action.type === 'GET_VEHICLE') {
//       return action.payload
//   }
//   return state;
// }

// const calculate = (state = [], action) => {
//   if (action.type === 'CALCULATE') {
//       return action.payload
//   }
//   return state;
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
