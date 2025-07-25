const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '9762ca04c120054143401373586ca59d';

// export const weatherResponse = async ( cityName: string ) => {
//     try {
//         const res = await fetch(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
//         if(!res.ok) throw new Error("Error: Weather Response Res is Not OK");
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }
// export const weatherData = async () => {
//     try {
//         const res = await fetch('https://ipapi.co/json/');
//         if(!res.ok) throw new Error("Error: Weather Response Res is Not OK");
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }
// ამჯერად მხოლოდ ამას ვიყენებ
export const fetchWeather = async ( latitude: number, longitude: number ) => {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
        if(!res.ok) throw new Error("Error: Weather Response Res is Not OK");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

