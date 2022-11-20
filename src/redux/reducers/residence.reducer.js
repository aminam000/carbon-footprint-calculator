const residence = (state = [], action) => {
    if (action.type === 'GET_RESIDENCE') {
        return action.payload
    }
    return state;
  }


  export default residence;