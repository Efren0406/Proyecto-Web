import map from './mexico-map.jpg';
import rainIcon from './assets/rain-2192523.svg'
import cloudy from './assets/weather-3440560.svg'
import partialyCloud from './assets/weather-3440563.svg'
import windy from './assets/weather-3443044.svg'
import './App.css';

function App() {
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

          <div className='line'>
            <hr />
          </div>

          <div className='todayInfo'>
            <p>
              12:24:10 pm <br />
              05 de diciembre <br />
              2023 <br />
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
          <p>Sábado</p>
          <p>12° / 20°</p>
          <img src={rainIcon}></img>
        </div>

        <div className='dayInfo' id='third'>
          <p>Domingo</p>
          <p>8° / 30°</p>
          <img src={cloudy}></img>
        </div>

        <div className='dayInfo' id='fourth'>
          <p>Lunes</p>
          <p>9° / 28°</p>
          <img src={partialyCloud}></img>
        </div>

        <div className='dayInfo' id='fifth'>
          <p>Martes</p>
          <p>10° / 31°</p>
          <img src={windy}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
