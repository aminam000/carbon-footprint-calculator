import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import residence from './residence.reducer';
import calculate from './calculate.reducers';
import shop from './shop.reducer';
import distance from './distance.reducer';
import flights from './flights.reducer';
import meat from './meat.reducer';
import othertrips from './othertrips.reducer';
import takeout from './takeout.reducer';
import vehicle from './vehicle.reducer';
import worktrip from './worktrip.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  residence,
  calculate,
  shop,
  distance,
  flights,
  meat,
  othertrips,
  takeout,
  vehicle,
  worktrip,
});

export default rootReducer;
