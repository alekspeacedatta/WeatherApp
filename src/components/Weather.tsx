import { useWeatherResponse } from "../customHooks/useWeatherResponse"
import { useCurrentWeather } from "../customHooks/useCurrentWeather";
import { useState } from "react"
import WeatherCard from "./WeatherCard";
const Weather = () => {

    const [ city, setCity ] = useState('');    
    const [ submittedCity, setSubmittedCity ] = useState('');
    const { mutate: fetchWeather, isPending, isError, error, data: weatherInfo } = useWeatherResponse();

    const { data: currentWeather } = useCurrentWeather();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmittedCity(city);
        if(city.trim() !== '') fetchWeather(city.toLocaleLowerCase());
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
                {isError && <p>Error: {(error as Error).message}</p>}
                {weatherInfo?.main?.temp && ( 
                    <WeatherCard
                        title={`Current Temprature In ${submittedCity}`}
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