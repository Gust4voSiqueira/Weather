import './Header.css'

import { AiOutlineHome } from 'react-icons/ai';
import { TiWeatherPartlySunny } from 'react-icons/ti';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
       <div className='header-container'>
           <nav>
            <Link to='/'><li><AiOutlineHome className='icons' /></li></Link>
            <Link to='/Weather'><li><TiWeatherPartlySunny className='icons' /></li></Link>
           </nav>
       </div>
    )
}