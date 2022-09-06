import React from 'react';
import '../css/mainapp.css';
//import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';

const mainApp = ({children}) => {
  /* function show () {
        return children;
    }*/
    let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className='parent_div'>
        <header className='header'>
            <div className='logo'> <FilterDramaOutlinedIcon style={{ fill: '#fff',fontSize: "50px" }}/> <div>Me-Weather</div></div>
        </header>
        <div className='body_container'>
            <div className='box'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default mainApp;