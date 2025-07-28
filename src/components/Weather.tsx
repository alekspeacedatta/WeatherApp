import { useEffect, useState } from "react"
import { useWeatherResponse } from "../customHooks/useWeatherResponse"
import { useCurrentWeather } from "../customHooks/useCurrentWeather";
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
                    <div className="weather-info">
                        <section>
                            <h2>Current temperature in {submitedCity}: {weatherInfo.main.temp}°C</h2>  
                            <h2>Weather: {weatherInfo.weather[0].main} - {weatherInfo.weather[0].description}</h2>
                        </section>
                    </div>
                )}
                {currentWeather?.main?.temp && (
                    <div className="weather-info">
                        <section>
                            <h2> temperature in your current Location: {currentWeather?.main?.temp} °C</h2>
                            <h2>Weather: {currentWeather.weather[0].main} - {currentWeather.weather[0].description}</h2>
                        </section>
                    </div>
                )}
            </div>                
        </>
    )
}
export default Weather