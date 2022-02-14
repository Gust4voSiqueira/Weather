import Input from '../../components/input/Input'
import './cityNotFound.css'
import animationData from './animation.gif';

export function cityNotFound() {

    return (
        <div className='cityNotFound-container'>
            <Input />
            
            <img src={animationData} alt="animação" />

            <div className="text">
                <h1>Parece que não encontramos sua cidade,</h1>
                <p>Tente buscar por outra!</p>
            </div>
        </div>
    )
}