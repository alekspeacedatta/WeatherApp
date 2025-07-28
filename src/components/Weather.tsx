import { useEffect, useState } from "react"
import { useWeatherResponse } from "../customHooks/useWeatherResponse"
import { useCurrentWeather } from "../customHooks/useCurrentWeather";
import WeatherCard from "./WeatherCard";
const Weather = () => {

    const [ city, setCity ] = useState('');    
    const [ submitedCity, setSubmitedCity ] = useState('');
    const { mutate: fetchWeather, isPending, isError, error, data: weatherInfo } = useWeatherResponse();

    const { mutate: fetchCurrentWeather, data: currentWeather } = useCurrentWeather();

    useEffect(() => {
        fetchCurrentWeather();
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitedCity(city);
        if(city.trim() !== '') fetchWeather(city.toLocaleLowerCase())
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
                        <input type="text" value={city} placeholder="search for the city" onChange={e => setCity(e.target.value)} />
                    </div>
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </form>
                
                {isPending && <p>Loading...</p>}
                {isError && <p>Error: {error.message}</p>}
                {weatherInfo?.main?.temp && ( 
                    <WeatherCard
                        title={`Current Temprature In ${submitedCity}`}
                        weatherInfo={weatherInfo}
                    />
                )}
                {currentWeather?.main?.temp && (
                    <WeatherCard 
                        title={"Temprature in your current Location"}
                        weatherInfo={currentWeather}
                    />
                )}
            </div>                
        </>
    )
}
export default Weather