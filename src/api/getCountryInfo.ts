import { COUNTRY_API } from "../utils/urls";

export function getCountryInfo(country: string, setData: any): void {
    fetch(`${COUNTRY_API}${country}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
}