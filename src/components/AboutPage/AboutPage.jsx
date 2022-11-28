import React from 'react';

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
        <p>Technologies used:
          <ul>
            <li>
              Javascript
            </li>
            <li>
              React and React Libraries
            </li>
            <li>
             SQL
            </li>
            <li>
             Material UI
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
