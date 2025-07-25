// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { QueryClient } from "@tanstack/react-query";
// import { weatherResponse } from "../apiCall";


// export const useWeatherResponse = () => {
//     const queryClient = useQueryClient()
//     return useMutation({
//         mutationFn: (cityName: string) => weatherResponse(cityName),
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['weather'] })
//         }
//     })
// }