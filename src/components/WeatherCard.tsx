const WeatherCard = ( {weatherInfo, title} : { weatherInfo : any, title: string } ) => {
  return (
        <div className="weather-info">
            <section>
                <h2>{title}: {weatherInfo?.main?.temp}°C</h2>  
                <h2>Weather: {weatherInfo.weather[0].main} - {weatherInfo.weather[0].description}</h2>
            </section>
        </div>
  )
}
export default WeatherCard