import { useEffect, useState } from "react"
import { getAvailableCountries, getUpcomingHolidaysWorldwide } from "../services/publicHolidaysAPI"
import AvailableCountryCard from "../components/availableCountryCard"
import HolidayCard from "../components/holidayCard"




const HomePage = () => {
    const [availableCountries, setAvailableCountries] = useState([])
    const [upcomingHolidays, setUpcomingHolidays] = useState([])

    useEffect(() => {
        const countries = getAvailableCountries()
        countries.then(data => setAvailableCountries(data))

        const upcomingHolidays = getUpcomingHolidaysWorldwide()
        upcomingHolidays.then(data => setUpcomingHolidays(data))
    }, [])

    return (
        <div className="d-flex">
            <section id='upcomingHolidaysSection' className="full-width flex-min-height">
                {upcomingHolidays && (
                    <>
                        <h2>Upcoming holidays worldwide</h2>
                        {upcomingHolidays.map((value: HolidayInterface) => (
                            <HolidayCard key={value.localName} name={value.name} date={value.date} localName={value.localName} countries={value.countries} countryCode={value.countryCode} />
                        ))}
                    </>

                )}
            </section>

            <section id='availableCountriesSection' className="full-width">
                {availableCountries && (
                    <>
                        <h2>Available countries ({availableCountries.length})</h2>

                        {availableCountries.map((value: AvailableCountryInterface) => (
                            <AvailableCountryCard key={value.countryCode} countryCode={value.countryCode} name={value.name} />
                        ))}
                    </>
                )}
            </section>
        </div>

    )
}

export default HomePage