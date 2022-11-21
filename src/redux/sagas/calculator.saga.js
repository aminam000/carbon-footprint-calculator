import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        console.log('data', action.payload);
        // const searchId = action.payload
        const res = yield axios.get(`/api/:calculate/${action.payload}`)
        yield put({
            type: 'SET_DATA',
            payload: res.data
        })
        }
        catch {
            console.log('getting data error')
        }
}
function* calculatorSagas() {
    yield takeEvery('FETCH_DATA', fetchData);
}
export default calculatorSagas;
  