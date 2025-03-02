import React, { useState }from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

// This component will encapsulate search and weather display
// which means its their parent component
function WeatherApp() {
    // weather holds the data, while, stateWeather is the state function that updates the data
    const [weather, setWeather] = useState(null);
    // error holds the error message, while, setError is the state function that updates the error message
    const [error, setError] = useState('');
    // city holds the city name, while, setCity is the state function that updates the city name
    const [city, setCity] = useState('');

    // This function will be called when the user submits the form
    const fetchWeather = async () => {
        
        // This is the API key that you will get from the openWeatherMap website
        const apiKey = 'f07078bdbb38baefc6bd30da37eaee23';

        // This is the URL of the API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        // This is the try block that will try to fetch the data from the API

        try {
            // This is the response from the API
            const response = await axios.get(url);
            // update weather state with the response data
            setWeather(response.data);
            // clear any error message on successful fetch
            setError('');

        } catch (error) {
            // Reset weather and set error message if fetch fails. 
            setWeather(null);
            // update error state with the error message
            setError("City not found");
        }
    }


  return (
    <div>
        <h1>Weather Search</h1>
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} error={error} />
    </div>
  );
}

export default WeatherApp;