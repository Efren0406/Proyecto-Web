import map from './mexico-map.jpg';
import rainIcon from './assets/rain-2192523.svg'
import cloudy from './assets/weather-3440560.svg'
import partialyCloud from './assets/weather-3440563.svg'
import windy from './assets/weather-3443044.svg'
import './App.css';
import API from './API/weather.json'

import React, { useState, useEffect } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const date = new Date();
  const city = 1;
  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  useEffect(() => {
    setWeatherData(API);
  }, []);

  return (
    <div className="cityView">
      <div>
        <p className='headerMain'>
          Servicio <br />
          Meteorológico<br />
          México<br />
        </p>
      </div>

      <div className='cityFrame'>
        <div className='cityData'>
          <div className='header'>
            <h1>
              CLIMA <br />
              ACTUAL
            </h1>
          </div>

          <div className='cityName'>
            <p>
              {weatherData[city] ? weatherData[city].nmun : 'Cargando...'}
            </p>
          </div>


          <div className='line'>
            <hr />
          </div>

          <div className='todayInfo'>
            <p>
              {weekDays[(date.getDay()) % 7]} <br />
              {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}<br />
            </p>
          </div>

          <div className='weather'>
            <p>
              {weatherData[city] ? weatherData[city].tmin : 'Cargando...'}° / {weatherData[city] ? weatherData[city].tmax : 'Cargando...'}° <br />
              {weatherData[city] ? weatherData[city].probprec : 'Cargando...'} % <br />
              {weatherData[city] ? weatherData[city].desciel : 'Cargando...'}
            </p>
          </div>

          <div className='line'>
            <hr />
          </div>

        </div>

        <div className='map'>
          <img src={map} alt='Mapa de méxico'></img>
        </div>
      </div>

      <div className='otherDays'>
        <div className='dayInfo' id='second'>
          <p>
            {weekDays[(new Date().getDay() + 1) % 7]} <br />
            {weatherData[city + 1] ? weatherData[city + 1].tmin : 'Cargando...'}° / {weatherData[city + 1] ? weatherData[city + 1].tmax : 'Cargando...'}° <br />
          </p>
          <img src={rainIcon} alt='Icono de lluvia'></img>
        </div>


        <div className='dayInfo' id='third'>
          <p>
            {weekDays[(new Date().getDay() + 2) % 7]} <br />
            {weatherData[city + 2] ? weatherData[city + 2].tmin : 'Cargando...'}° / {weatherData[city + 2] ? weatherData[city + 2].tmax : 'Cargando...'}° <br />
          </p>
          <img src={cloudy}></img>
        </div>

        <div className='dayInfo' id='fourth'>
          <p>
            {weekDays[(new Date().getDay() + 3) % 7]} <br />
            {weatherData[city + 3] ? weatherData[city + 3].tmin : 'Cargando...'}° / {weatherData[city + 3] ? weatherData[city + 3].tmax : 'Cargando...'}° <br />
          </p>
          <img src={partialyCloud}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
