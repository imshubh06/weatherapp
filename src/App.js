import './style.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8e14f92df0b19b7873b0ae1a67a2fbf2`

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
    setLocation("")
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          type="text"
          placeholder="Enter Location"
          onChange={event => setLocation(event.target.value)}
          className="input"

        />

        <button onClick={searchLocation}>Search</button>

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].description}</p> : null}

          </div>
        </div>

        {
          data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}m/s</p> : null}

              <p>Wind Speed</p>
            </div>
          </div>
        }




      </div>
    </div>
  );
}

export default App;
