import React from 'react'
import './CurrentWeather.css'

function CurrentWeather() {
  return (
    <div className='weather'>
        <div className="top">
            <p className='city'>Belgrade</p>
            <p className='weather-description'>Sunny</p>
        </div>
        <img alt='weather' className='weather-icon' src='icons/01d.png' />
    </div>
  )
}

export default CurrentWeather