const shop = (state = [], action) => {
    if (action.type === 'GET_SHOP') {
        return action.payload
    }
    return state;
  }


  export default shop;