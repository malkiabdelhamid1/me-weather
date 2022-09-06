import './css/App.css';
import Axios from 'axios';
import { useState } from 'react';
import SearchCity from './components/SearchCity';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Result from './components/Result';
import Animation from './components/Animation';
function App () {

  const [input, setInput] = useState('');
  const [weather, setweather] = useState('');
  const navigate = useNavigate('');

  const getapi = (e) => {
    e.preventDefault();
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=480dee5b6d864056bfaf0c019144d73c`).then((response)=>{
      setweather(response.data);
      console.log(weather);
      navigate('/result')
}).catch((error)=>{
  alert('something went wrong try again');
  window.location.reload();

});

  }
  return (
    <div className='app_container'>
      <Routes>
        <Route path="/" element={<Animation/>}/>
        <Route path="/search" element={<SearchCity getapi={getapi} setInput={setInput}/>}/>
        <Route path="/result" element={<Result weather={weather}/>}/>
        
      </Routes>
      </div>
  );
}

export default App;
