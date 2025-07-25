import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../apiCall";

export const useFetchWeather = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ['weatherTemprature', latitude, longitude], 
    queryFn: () => fetchWeather(latitude, longitude),
  });
};
