const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City parameter is required' });

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);

    const { main, weather, wind, name } = response.data;
    const result = {
      city: name,
      temperature: main.temp,
      condition: weather[0].main,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      humidity: main.humidity,
      windSpeed: wind.speed,
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
