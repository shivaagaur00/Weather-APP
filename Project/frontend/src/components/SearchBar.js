import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 rounded-l w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">Search</button>
    </form>
  );
}
