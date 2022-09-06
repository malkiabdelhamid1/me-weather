import React from 'react';
import MainApp from './MainApp';
import '../css/result.css'
import { Link } from 'react-router-dom';



function Result({weather}) {
  console.log(weather);
  /*const [daraja,setDaraja] = useState();
  setDaraja(
  );*/
  //Temperature:
  //humidity: 
  //wind:
  const Temp =`${weather.main.temp-273.15}`.slice(0,4);
  return (
    <MainApp>
      <div className='container'>
        <h1>{weather.name}</h1>
        <div className='description'>"{weather.weather[0].description}"</div>
        <div className='row-section'>
          <div className='coord-row'>
            <h3>Lat: </h3>
            <p> {weather.coord.lat} </p>
          </div>
          <div className='coord-row'>
            <h3>Lon: </h3>
            <p> {weather.coord.lon}</p>
          </div>
        </div>

        <hr/>

        <div className='section'>
          <div className='column'>
            <h3>Temp</h3>
            <p>{Temp}c</p>
          </div>
          <div className='column'>
            <h3>Wind</h3>
            <p>{weather.wind.speed} km/h</p>
          </div>
          <div className='column'>
            <h3>Humidity</h3>
            <p>{weather.main.humidity}%</p>
          </div>
        </div>

        <hr/>

        <div className='section'>
          <div className='column'>
            <h3>pressure</h3>
            <p>{weather.main.pressure}</p>
          </div>
          <div className='column'>
            <h3>visibility</h3>
            <p>{weather.visibility}</p>
          </div>
          <div className='column'>
            <h3>timezone</h3>
            <p>{weather.timezone}</p>
          </div>
        </div>
        <div className='link'><Link to="/search" style={{color:'#1e6bf0',fontSize:'20px'}}>back</Link></div>
      </div>
    </MainApp>
  )
}

export default Result