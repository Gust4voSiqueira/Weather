/* eslint-disable react-hooks/exhaustive-deps */
import Input from '../../components/input/Input'
import './Weather.css'
import { useSearch } from '../../services/useSearch'

import clearSky from "../../images/clear-sky.png"
import fewClouds from "../../images/few-clouds.png"
import scatteredClouds from "../../images/scattered-clouds.png"
import brokenClouds from "../../images/broken-clouds.png"
import showerRain from "../../images/shower-rain.png"
import rain from "../../images/rain.png"
import thunderstorm from "../../images/thunderstorm.png"
import snow from "../../images/snow.png"
import mist from "../../images/mist.png"
import { useEffect } from 'react'

export default function Weather() {
const { weather } = useSearch()

useEffect(() => {
  if(weather.cod === '404') {
    window.location.href = "/cityNotFound"
  } else {
    imageSearch()
  }
}, [weather])

const imageSearch = () => {
  if(weather.weather !== undefined) {
    switch (weather.weather[0].main) {
      case "Clear":
        return clearSky
      case "Clouds":
        return fewClouds
      case "scattered clouds":
        return scatteredClouds
      case "broken clouds":
        return brokenClouds
      case "Drizzle":
        return showerRain
      case "Rain":
        return rain
      case "thunderstorm":
        return thunderstorm
      case "Snow":
        return snow
      case "mist":
        return mist
    }
  } else {
    return
  }
}


return (
  <div className='Weather-container'>
  <Input />
         <p className='city-name'>{weather.name}</p>
         <p className='temperatura-container'>{
                weather.main !== undefined ? 
                (<><span className='temperatura-span'>{(weather.main.temp).toFixed(0)}</span><span className='icon-grau'>º</span></>) :
                (<span></span>)
              }</p>
              
              {weather.weather !== undefined ? (<img src={imageSearch()} alt="Banner" />) : (<div className="c-loader"></div>)}
        

         <div className='temp-umd-container'>
              <div className='temperatura'>
              {
                    weather.main !== undefined ?
                  (
                    <>
                    <span>Temp</span>
                    <span style={{fontWeight: "800"}}>{(weather.main.temp).toFixed(0)}ºC</span>
                    </>
                  ) :
                  (<span style={{fontWeight: "800"}}></span>)
                  }
                  
              </div>

              <div className='umidade'>
              {
                    weather.main !== undefined ?
                  (
                    <>
                    <span>Umidade</span>
                      <span style={{fontWeight: "800"}}>{weather.main.humidity}%</span>
                    </>
                  )
                     :
                    (<span style={{fontWeight: "800"}}></span>)
                  }
         </div>
      </div>
  </div>
  ) 

      
        

}