import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeatehr } from "../apiCall";

export const useCurrentWeather = () => {
    return useQuery({
        queryKey: ['currentWeather'],
        queryFn: fetchCurrentWeatehr
    })
}