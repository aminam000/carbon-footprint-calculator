const takeout = (state = [], action) => {
    if (action.type === 'GET_TAKEOUT') {
        return action.payload
    }
    return state;
  }


  export default takeout;