const worktrip = (state = [], action) => {
    if (action.type === 'GET_WORKTRIP') {
        return action.payload
    }
    return state;
  }


  export default worktrip;