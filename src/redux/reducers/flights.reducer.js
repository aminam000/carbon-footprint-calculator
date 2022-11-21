const flights = (state = [], action) => {
    if (action.type === 'GET_FLIGHTS') {
        return action.payload
    }
    return state;
  }


  export default flights;