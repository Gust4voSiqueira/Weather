import Input from '../../components/input/Input'
import './Weather.css'
import Header from '../../components/header/Header'
import { useSearch } from '../../services/useSearch'
import { useEffect, useState } from 'react'


export default function Weather() {
const { weather } = useSearch()
const [ image, setImage ] = useState("")

useEffect(() => {
  if(weather.weather !== undefined) {
    fetch(`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    .then(response => setImage(response.url)) 
  }
}, [weather])

console.log(weather)
    return (
        <div className='Weather-container'>
            <Input />
            <Header />
            <div className='banner'>
              <img src={image} alt="" />
               
               <h1>{
                      weather.main !== undefined ? 
                      (<span style={{fontWeight: "800"}}>{(weather.main.temp).toFixed(0)}ºC</span>) :
                      (<span style={{fontWeight: "800"}}>Aguarde</span>)
                    }</h1>

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
        </div>
    )
}