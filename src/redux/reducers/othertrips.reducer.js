const othertrips = (state = [], action) => {
    if (action.type === 'GET_OTHERTRIPS') {
        return action.payload
    }
    return state;
  }


  export default othertrips;