import React from 'react'

const SearchBar = ({city,setCity,fetchWeather}) => {

const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
};

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
             <h1 className='mb-2 uppercase text-xl font-semibold'> weather search  </h1>
            <input className='p-2 border border-solid border-blue-400 rounded-md uppercase text-stone-950' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
            <button className='py-2 px-3 text-black bg-blue-500 border border-none rounded cursor-pointer hover:bg-[#0056b3] uppercase' type="submit">Search</button>

        </form>
    </div>
  )
}

export default SearchBar




