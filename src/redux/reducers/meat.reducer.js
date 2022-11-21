const meat = (state = [], action) => {
    if (action.type === 'GET_MEAT') {
        return action.payload
    }
    return state;
  }


  export default meat;