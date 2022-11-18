import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ProfilePage() {
  return (
    <div className="container">
      <p>Profile</p>
      <button>Edit Profile</button>
      <p> I drive a: </p>
      <p> I live in a(n): </p>
      <p> I live __ away from my job </p>
      <p> I am a vegetarian </p>
    </div>
  );
}

export default ProfilePage;
