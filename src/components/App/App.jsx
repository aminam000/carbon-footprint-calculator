import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Calculate from '../Calculate/Calculate';
import CreateCalculation from '../CreateCalculation/CreateCalculation';
import ProfilePage from '../ProfilePage/ProfilePage';
import WeeklyItem from '../WeeklyItem/WeeklyItem';
import WeeklyList from '../WeeklyList/WeeklyList';
import Vehicles from '../Vehicles/Vehicles';
import Residence from '../Residence/Residence';
import Transport from '../Transport.jsx/Transport';
import Distance from '../Distance/Distance';
import WorkTransport from '../WorkTransport/WorkTransport';
import Meals from '../Meals/Meals';
import Shopping from '../Shopping/Shopping';
import Takeout from '../Takeout/Takeout';
import Flights from '../Flights/Flights';

import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Calculate"
          >
            <Calculate />
  
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/CreateCalculate"
          >
            <CreateCalculation />
  
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Residence"
          >
            <Residence />
  
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Vehicles"
          >
            <Vehicles />
  
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Transport"
          >
            <Transport />
  
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Distance"
          >
            <Distance />
  
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/WorkTransport"
          >
            <WorkTransport />
  
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Meals"
          >
            <Meals /> 
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Shopping"
          >
            <Shopping /> 
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Takeout"
          >
            <Takeout /> 
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Flights"
          >
            <Flights /> 
          </ProtectedRoute>

          <ProtectedRoute
  
            exact
            path="/profile"
          >
            <ProfilePage />

          </ProtectedRoute>
          {/* <ProtectedRoute
  
            exact
            path="/calendar"
          >
            <Calendar /> */}
{/* 
          </ProtectedRoute> */}

          <ProtectedRoute
  
            exact
            path="/WeeklyList"
          >
            <WeeklyList />

          </ProtectedRoute>

          <ProtectedRoute
  
            exact
            path="/WeeklyItem"
          >
            <WeeklyItem />

          </ProtectedRoute>
          {/* <ProtectedRoute
  
            exact
            path="/vehicle"
          >
            <Vehicles /> 

          </ProtectedRoute>

          <ProtectedRoute
  
            exact
            path="/residence"
          >
            <Residence />

          </ProtectedRoute>  */}

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
