import React from 'react'

const WeatherDisplay = ({weather, error}) => {
  if (error) return <p className='mt-2 text-red-500 antialiased text-base font-black capitalize'>{error}</p>
  if (!weather) return <p className='mt-2 text-blue-500 antialiased text-sm'> Enter City To See The Weather! </p>

  return (
    <div>
        <h1 className='mt-2 text-lg subpixel-antialiased font-black uppercase'>Weather Details: </h1>
    <div className='mt-2 text-lg font-mono align-middle'>
        <p>City: {weather.name}</p>
        <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: {weather.weather[0].description}</p>
        <p>Wind Speed: {weather.wind.speed}m/s</p>
        <p>Humidity: {weather.main.humidity}%</p>
    </div>
    </div>
    
  )

}

export default WeatherDisplay