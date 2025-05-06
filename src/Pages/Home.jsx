import React from 'react';// Assuming you have a CSS file for styling
import '../styles/Home.css'; // Adjust the path as necessary

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">WELCOME TO YOUR TASK LIST</h1>
      <p className="home-description">This is a simple To-Do application.</p>
      {/* <Link to="/todo" className="home-link">Go to To-Do List</Link> */}
    </div>
  );
}

export default Home;