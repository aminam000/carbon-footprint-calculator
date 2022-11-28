import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import './LandingPage.css';
import BackgroundImagePage from '../Background/Background';
// import Landing from "./public/images/Landing.jpg";
//import pic from ".images/Landing.jpg";

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div 
    className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
     
          </p>

          <p>
    
          </p>

          <p>

          </p>
        </div>
        <style>
        <img src={pic} />
    </style>
  
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
