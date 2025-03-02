import React from 'react';
import Home from './components/Home'; // component Home import
import WeatherApp from './components/WeatherApp'; // component weatherApp import 
import './App.css';
// In here we are importing routing tools. 
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';

// this app component serves as the main entry point and router setup 
function App() {
  return (
    // BrowseRouter aliased as router, enables client side routing. 
    <Router>
      <div className="App">{/* App component */}
        <nav>
          {/* Navigation links */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
        {/* Routes define which component renders based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App


// app 
// nav
// ul 
// li
// Link
// Routes
// Route
