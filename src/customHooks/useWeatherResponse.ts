import { useMutation, useQueryClient } from "@tanstack/react-query"
import { weatherResponse } from "../apiCall"

export const useWeatherResponse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: weatherResponse,
        onSuccess: (data, city) => {
            queryClient.setQueryData(['weather', city], data);
        }
    })
}