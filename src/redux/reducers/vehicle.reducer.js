const vehicle = (state = [], action) => {
    if (action.type === 'GET_VEHICLE') {
        return action.payload
    }
    return state;
  }


  export default vehicle;