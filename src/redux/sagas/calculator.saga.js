import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* Calculate(action) {
    try {
      // clear any existing error on the login page
      yield put({ type: 'CALCULATE' });
  
      const config = {
     
      };
  
      // send the action.payload as the body
      // the config includes credentials which
      // allow the server session to recognize the user
      yield axios.post('/calculate', action.payload, config);
  
      // after the user has logged in
      // get the user information from the server
      yield put({ type: 'FETCH_INFO' });
    } catch (error) {
      console.log('Error with getting from db:', error);
      if (error.response.status === 401) {
        // The 401 is the error status sent from passport
        // if user isn't in the database or
        // if the username and password don't match in the database
        yield put({ type: 'INFO_FAILED' });
      } else {
        // Got an error that wasn't a 401
        // Could be anything, but most common cause is the server is not started
        yield put({ type: 'INFO_FAILED_NO_CODE' });
      }
    }
  }
  
  // worker Saga: will be fired on "LOGOUT" actions
  
  
  
  
  function* CalculateSaga() {
    yield takeLatest('CALCULATE', Calculate);

  }
  
  export default CalculateSaga;
  