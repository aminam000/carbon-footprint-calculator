const total = (state = [], action) => {
    if (action.type === 'GET_TOTAL') {
        return action.payload
    }
    return state;
  }


  export default total;