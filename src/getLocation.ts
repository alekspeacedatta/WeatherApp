export const getCurrentLocation = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
            (success) => {
                const { latitude, longitude } = success.coords;
                res({ latitude, longitude });
            },
            (error) => rej(error)
        )
    })
}