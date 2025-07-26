const BASE_URL = 'api.openweathermap.org/data/2.5';
const API_KEY = '9762ca04c120054143401373586ca59d';

export const weatherResponse = async ( cityName: string) => {
    try {
        const res = await fetch(`https://${BASE_URL}/weather?q=${cityName}&APPID=${API_KEY}&units=metric`);
        if(!res.ok) throw new Error("Error: Weather Response Res is Not OK");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
