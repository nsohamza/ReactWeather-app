import React, { useState }from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';


function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [city, setCity] = useState('');

    const fetchWeather = async () => {

        const apiKey = process.env.REACT_APP_API_KEY;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
        
            const response = await axios.get(url);
         
            setWeather(response.data);
  
            setError('');

        } catch (error) {
            
            setWeather(null);
           
            setError("City not found!");
        }
    }


  return (
    <div >
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} error={error} />
    </div>
  );
}

export default WeatherApp;