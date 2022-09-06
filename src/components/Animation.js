import React from 'react';
import '../css/animation.css';
import { useNavigate } from 'react-router-dom';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';

function Animation() {
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate('/search')
    },6800)
  return (
  <div className='main-container'>
    <div className='row-container'>
    <FilterDramaOutlinedIcon style={{ fill: '#fff' }} className='fdo-icon' />
    <div>Me-Weather</div>
    </div>

  </div>
  )
}

export default Animation