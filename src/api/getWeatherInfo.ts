import { WEATHER_API } from "../utils/urls"
import { API_KEY } from "../utils/apiKeys"

export function getWeatherInfo(capital: string, setData: any): void {
    fetch(`${WEATHER_API}?access_key=${API_KEY}&query=${capital}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
}