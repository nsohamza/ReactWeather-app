import React from 'react';
import Home from './components/Home'; 
import WeatherApp from './components/WeatherApp'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='text-center p-4 first-letter: font-sans'>
        <nav className='hover:no-underline uppercase'>
          <ul className='flex justify-end list-none text-center mb-5'>
            <li className='mx-3 no-underline text-blue-500 text-xl font-bold hover:text-blue-600'>
              <Link to='/'>Home</Link>
            </li>
            <li className='mx-3 no-underline  text-blue-500  text-xl font-bold hover:text-blue-600'>
              <Link to='/weather'>Weather</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather' element={<WeatherApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


