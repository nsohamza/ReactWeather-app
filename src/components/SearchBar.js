import React from 'react'

const SearchBar = ({city,setCity,fetchWeather}) => {

const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
};

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar




