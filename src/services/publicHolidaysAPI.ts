import axios from "axios"

const get = async (endpoint: string) => {
    const res = await axios.get(endpoint)
    return res.data
}

export const getAvailableCountries = () => {
    return get(`https://date.nager.at/api/v3/AvailableCountries`)

}

export const getCountryInfo = (countryCode: string) => {
    return get(`https://date.nager.at/api/v3/countryinfo/${countryCode}`)
}

export const getCountryHolidays = (countryCode: string) => {
    return get(`https://date.nager.at/api/v3/nextpublicholidays/${countryCode}`)
}

export const getUpcomingHolidaysWorldwide = () => {
    return get(`https://date.nager.at/api/v3/nextpublicholidaysworldwide`)
}