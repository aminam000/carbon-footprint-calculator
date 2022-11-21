const distance = (state = [], action) => {
    if (action.type === 'GET_DISTANCE') {
        return action.payload
    }
    return state;
  }


  export default distance;