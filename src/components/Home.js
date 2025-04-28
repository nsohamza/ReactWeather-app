import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1 className='mt-2 text-blue-400 font-extrabold text-3xl uppercase'>Welcome to the Weather App</h1>
        <p className='mt-2 text-xl uppercase font-bold'>Check the Weather for Any City</p>

        <Link to="/weather" className='text-base uppercase mt-2 py-3 px-8 font-semibold bg-blue-400 text-white no-underline rounded-2xl duration-75 hover:bg-blue-700 inline-block'>Get Started</Link>
    </div>

  )
}

export default Home 


