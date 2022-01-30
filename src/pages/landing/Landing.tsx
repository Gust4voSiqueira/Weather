import './Landing.css'

import bannerLanding from '../../images/banner-landing.png'
import Input from '../../components/input/Input'

export default function Landing() {
    return (
        <div className='landing-container'>
            <Input />

            <div className='banner'>
                <img src={bannerLanding} alt='Banner' />
        
                <h1>Seja Bem-Vindo!</h1>
                <p>Para iniciarmos, busque pela sua cidade!</p>
            </div>
      </div>
    )
}