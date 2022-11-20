const calculate = (state = [], action) => {
    if (action.type === 'CALCULATE') {
        return action.payload
    }
    return state;
  }


  export default calculate;