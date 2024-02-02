import './App.css';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="HolbertonLogo.jpg" alt="Holberton Logo" /> {/* Assuming logo.png is in src/ */}
        <h1>School Dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

