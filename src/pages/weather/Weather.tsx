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

export default function Weather() {
const { weather } = useSearch()

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
               <p>{
                      weather.main !== undefined ? 
                      (<span>{(weather.main.temp).toFixed(0)}<span className='icon-grau'>º</span></span>) :
                      (<span>Aguarde</span>)
                    }</p>
                    
                    {weather.weather !== undefined ? (<img src={imageSearch()} alt="" />) : console.log('nAO')}
              

               <div className='temp-umd-container'>
                    <div className='temperatura'>
                        <span>Temp</span>
                        {
                          weather.main !== undefined ? 
                          (<span style={{fontWeight: "800"}}>{(weather.main.temp).toFixed(0)}ºC</span>) :
                          (<span style={{fontWeight: "800"}}>Aguarde</span>)
                        }
                        
                    </div>

                    <div className='umidade'>
                        <span>Umidade</span>
                        <span style={{fontWeight: "800"}}>
                        {
                          weather.main !== undefined ? 
                          (<span style={{fontWeight: "800"}}>{weather.main.humidity}%</span>) :
                          (<span style={{fontWeight: "800"}}>Aguarde</span>)
                        }
                        </span>
               </div>
            </div>
        </div>
    )
}