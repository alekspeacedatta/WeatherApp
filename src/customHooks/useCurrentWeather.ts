import { useMutation } from "@tanstack/react-query";
import { fetchCurrentWeatehr } from "../apiCall";

export const useCurrentWeather = () => {
    return useMutation({
        mutationFn: fetchCurrentWeatehr
    })
}