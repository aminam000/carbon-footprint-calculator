import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import axios from 'axios';

// redux imports 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import logger from 'redux-logger'
import store from './redux/store';

import App from './components/App/App';

//create events, state and reducers
const sagaMiddleware = createSagaMiddleware();

const userList = (state = [], action) => {
  if(action.type === 'SET_USER_LIST') {
      return action.payload;
  }

  return state;
}

// hold only the single student object being edited
const editProfile = (state  = {}, action) => {
  switch (action.type) {
      case 'SET_EDIT_USER':
          return action.payload;
      case 'UPDATE_EDIT_USER':
          return {
              ...state,
              ...action.payload
          };
  };

  return state;
}

function* fetchUsers() {
  try {
      const response = yield axios.get('/profile')
      yield put({ type: 'SET_USER_LIST', payload: response.data })
  } catch (err) {
      console.log(err)
  }
}

function* addUser(action) {
  try {
      yield axios.post('/profile', action.payload)
      yield put({ type: 'FETCH_PROFILE' })
  } catch (err) {
      console.log(err)
  }
}

function* fetchEditProfile(action) {
  try {
      // GET localhost:5000/students/37
      const response = yield axios.get(`/profile/${action.payload}`);

      yield put({
          type: 'SET_EDIT_PROFILE',
          payload: response.data
      });
  }
  catch (err) {
      console.error(err);
  } 
}


function* saveProfile(action) {
  // edit
  if (action.payload.id) {
      yield axios.put(`/profile/${action.payload.id}`, action.payload);
  }
  // add new
  else {
      yield axios.post(`/profile`, action.payload)
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PROFILE', fetchUsers);
  yield takeEvery('ADD_USER', addUser);
  yield takeEvery('FETCH_EDIT_PROFILE', fetchEditProfile);
  yield takeEvery('SAVE_PROFILE', saveProfile);
}



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

const storeInstance = createStore(
  combineReducers({
      userList,
      editProfile
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
