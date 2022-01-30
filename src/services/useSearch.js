import React, { createContext, useState, useContext } from "react";
const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [ weather, setWeather ] = useState({})

    const api = {
        key: "ae0429c38a7e78721d6c065e220ecd7b",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const search = (city) => {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
        });

    }

        const store = {
            weather,
            search
        }
    
        return (
            <SearchContext.Provider value={store}>
                {children}
            </SearchContext.Provider>
        )

}

export function useSearch() {
    const context = useContext(SearchContext)

    const {
        weather,
        search
    } = context

    return {
        weather,
        search
    }
}