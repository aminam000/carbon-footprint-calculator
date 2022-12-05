import React from 'react';
import './AboutPage.css';
//import image from './src/components/AboutPage/qrcode_40795144_41efa1e48eacf230a1ffbaab8f41aef0 (1).png';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Thank you to Prime and the Ramirez Cohort!
        </p>
        <p>Technologies used:</p>
          <ul>
            <li>
              Javascript
            </li>
            <li>
              React 
            </li>
            <li>
              Rechart
            </li>
            <li>
             SQL
            </li>
            <li>
             Material UI
            </li>
          </ul>
        <p>Connect with me on LinkedIn</p>
   
      </div>
    </div>
  );
}

export default AboutPage;
