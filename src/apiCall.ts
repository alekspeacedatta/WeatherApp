const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
import { getCurrentLocation } from "./getLocation";

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

export const fetchCurrentWeatehr = async () => {
    const { latitude , longitude } : { latitude: number; longitude: number } = await getCurrentLocation();
    const res = await fetch(`https://${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    if(!res.ok) throw new Error("Error");
    const data = await res.json();
    return data;
}