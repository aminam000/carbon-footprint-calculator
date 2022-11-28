import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchData() {
  // gets data from db
  try {
    const response = yield axios({
      method: "GET",
      url: "/choices",
    });
    console.log("get all data", response.data);
    yield put({
      type: "FETCH_DATA",
      payload: response.data,
    });
  } catch {
    console.error("error in DATA GET SAGAS");
  }
}

function* addData(action) {
  console.log('in add data', action.payload)
  yield axios({
    method: "POST",
    url: "/values",
    data: action.payload,
  });
}

function* deleteData(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/values/${action.payload}`,
    });
    yield put({
      type: "FETCH_DATA",
    });
  } catch {
    console.log("ERROR/DELETE Data");
  }
}

function* updateData(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/values/${action.payload}`,
    });
    yield put({
      type: "SET_DATA",
    });
  } catch {
    console.log("ERROR/PUT DATA");
  }
}

function* fetchCompleted() {
    
    try {
      const response = yield axios({
        method: 'GET',
        url: `/total`,
      });
      console.log('GET Completed cALCULATION:', response.data);
      yield put({ type: 'SET_UPDATED_CALC', payload: response.data });
  
    } catch {
      console.log('GET/COMPLETED error');
    }
  
  }

  function* completeCalc(action) {
    
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/total/${action.payload}`,
      
      })
      yield put({
        type: 'FETCH_COMPLETED_CALC'
      })
    } catch {
      console.log('ERROR/COMPLETE ', action.payload);
    }
  }
  



function* calcSagas() {
  yield takeEvery("CURRENT_DATA", addData);
  yield takeEvery("FETCH_DATA", fetchData);
  yield takeEvery("DELETE_DATA", deleteData);
  yield takeEvery("SET_DATA", updateData);
  yield takeEvery("FETCH_COMPLETED_CALC", fetchCompleted);
  yield takeEvery("COMPLETED_CALC", completeCalc);

}
export default calcSagas;
