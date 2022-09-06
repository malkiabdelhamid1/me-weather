import React from 'react';
import MainApp from './MainApp';
import '../css/searchCity.css';
//import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

function SearchCity({getapi, setInput, input}) {
  return (
    <MainApp>
      <form >
        <h2>sheck the weather of a city</h2>
        <div className='input_container'>
        <input type="text" placeholder='Enter a city name' value={input}  onChange={(e)=> setInput(e.target.value)} />
        </div>
        <button onClick={(e)=> getapi(e)} ><div>check the </div> <ThunderstormOutlinedIcon  style={{ fill: '#fff',fontSize:"25px" }}/></button>
      </form>
    </MainApp> 
  )
}

export default SearchCity;