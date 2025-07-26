import { useState } from "react"
// import { useWeatherResponse } from "../customHooks/useWeatherResponse"
// import { useWeather } from "../customHooks/useWeather";
import { useFetchWeather } from "../customHooks/useFetchWeather";
const Weather = () => {
    const latitude = 41.6959;
    const longitude = 44.832;

    // const { data: weather, } = useWeather();
    const { data: fetchedWeather, isLoading, isError, error } = useFetchWeather(latitude, longitude);

    const [ city, setCity ] = useState('');

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>error {error.message}</p>

    return (
        <>
            <div className="weather">
                <section>
                    <h1>Weather App</h1>
                    <p>Get Current weather and 5-day forecast</p>
                </section>
                <form>
                    <div className="search-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" value={city} placeholder="enter city name" onChange={e => setCity(e.target.value)} />
                    </div>
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </form>
                <h2>
                    Current temperature in your city: {fetchedWeather?.current?.temperature_2m ? `${fetchedWeather.current.temperature_2m}°C` : "No data"}
                </h2>
            </div>
                {/* ეს იმიტომ დავაკომენტარე რომ მაგ აიპია მისამართზე აღარ მქონდა წვდომა */}
                {/* <h1>your current city: {weather.city}</h1> */}
        </>
    )
}
export default Weather