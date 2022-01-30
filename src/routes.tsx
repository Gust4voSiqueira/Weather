import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Weather from "./pages/weather/Weather";
import SearchProvider from "./services/useSearch";

export default function Router() {
    return (
       <SearchProvider>
            <BrowserRouter>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Weather" component={Weather} />
            </BrowserRouter>
        </SearchProvider> 
        
    )
}