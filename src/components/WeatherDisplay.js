import React from 'react'

const WeatherDisplay = ({weather, error}) => {
  if (error) return <p>{error}</p>
  if (!weather) return <p> Enter The City To See The Weather! </p>

  return (
    <div>
        <h1>Weather Details</h1>
        <p>City: {weather.name}</p>
        <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: {weather.weather[0].description}</p>
        <p>Wind Speed: {weather.wind.speed}m/s</p>
        <p>Humidity: {weather.main.humidity}%</p>
    </div>
  )

}

export default WeatherDisplay