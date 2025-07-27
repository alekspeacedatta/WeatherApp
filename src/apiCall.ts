const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


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
