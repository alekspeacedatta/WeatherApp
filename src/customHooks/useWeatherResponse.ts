import { useMutation } from "@tanstack/react-query"
import { weatherResponse } from "../apiCall"

export const useWeatherResponse = () => {
    return useMutation({
        mutationFn: weatherResponse,
    })
}