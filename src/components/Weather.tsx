import { useState } from "react"
import { useWeatherResponse } from "../customHooks/useWeatherResponse"
const Weather = () => {

    const [ city, setCity ] = useState('');    
    const [ submitedCity, setSubmitedCity ] = useState('');
    const { mutate: fetchWeather, isPending, isError, error, data: weatherInfo } = useWeatherResponse();
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitedCity(city);
        if(city.trim() !== '') fetchWeather(city)
    }
    return (
        <>
            <div className="weather">
                <section>
                    <h1>Weather App</h1>
                    <p>Get Current weather and 5-day forecast</p>
                </section>
                <form onSubmit={handleSubmit}>
                    <div className="search-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" value={city} placeholder="enter city name" onChange={e => setCity(e.target.value)} />
                    </div>
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </form>
                
                {isPending && <p>Loading...</p>}
                {isError && <p>Error: {error.message}</p>}
                {weatherInfo?.main?.temp && (
                <h2>Current temperature in {submitedCity}: {weatherInfo.main.temp}°C</h2>
                )}
                
            </div>                
        </>
    )
}
export default Weather