import './Input.css'

import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useSearch } from '../../services/useSearch';
import { Link } from 'react-router-dom';

export default function Input() {
    const { search } = useSearch()
    const [ city, setCity ] = useState('')

    return (
        <>
            <form className="submit-line">
                <input type="text" placeholder='Buscar' onChange={(e) => {
                    setCity(e.target.value)
                }} value={city}/>
                    
                    <Link to="/Weather">
                        <button className="submit-lente" onClick={() => {
                            search(city)
                        }}>
                        < BsSearch />
                        </button>
                    </Link>
            </form>
            
            </>
            )
}
