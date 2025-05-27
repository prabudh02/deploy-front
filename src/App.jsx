import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [jokes, setJokes] = useState([]);

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(`https://back-chi-two.vercel.app/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      alert('Failed to fetch weather');
    }
  };
  useEffect(()=>{
    axios.get('https://back-chi-two.vercel.app/api/jokes').catch((error) => {
      console.error('Error fetching jokes:', error);
    }
    ).then((response) => {
      setJokes(response.data);
    });
  })

  return (
    <div style={{ display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      textAlign: 'center',padding: '10rem', paddingLeft:'35rem',gap: '.5rem' }}>
      <h1>🌍 Now your Weather </h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '0.5rem' }}
      />
      <button onClick={getWeather} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{weather.location.name}, {weather.location.country},{weather.location.region}</h2>
          <p>🌡 Temp: {weather.current.temp_c} °C</p>
          <p>☁️ Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      )}
      <h2>JOKES:{jokes.length}</h2>
      {
        jokes.map((joke) => (
          <div key={joke.id} style={{ margin: '1rem 0' }}>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
          </div>
        ))  
      }
    </div>
  );
}
/// ok ds...sslokcls.zxamlkxal.xmaa.xmcasnszc lnaxdwm
export default App;
