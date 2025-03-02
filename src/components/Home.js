import React from 'react'
import { Link } from 'react-router-dom'
import  '../../src/Home.css'

// Home component represents the landing page of the app
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
        <p>Check the Weather for Any City</p>

        {/* Link to the weather page */}
        <Link to="/weather" className='get-started-button'>Get Started</Link>

    </div>
   
  )
}

export default Home // export the Home component for use in APP.js because that where it will be rendered.