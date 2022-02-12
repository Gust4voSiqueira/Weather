import Input from '../../components/input/Input'
import './cityNotFound.css'

import CityNotFoundImage from '../../images/banner-citynotfound.png'

export function cityNotFound() {
    return (
        <div className='cityNotFound-container'>
            <Input />
        
            <img src={CityNotFoundImage} alt="CityNotFoundImage" />

            <div className="text">
                <h1>Parece que não encontramos sua cidade,</h1>
                <h1>Tente buscar por outra!</h1>
            </div>
        </div>
    )
}