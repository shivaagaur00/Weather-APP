import React from 'react';

export default function WeatherCard({ data }) {
  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <h2 className="text-xl font-bold mb-2">{data.city}</h2>
      <img src={data.icon} alt={data.condition} className="mx-auto" />
      <p className="text-lg">{data.condition}</p>
      <p>Temperature: {data.temperature}&deg;C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
}