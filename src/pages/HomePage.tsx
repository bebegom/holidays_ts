import { useEffect, useState } from "react"
import { getAvailableCountries, getUpcomingHolidaysWorldwide } from "../services/publicHolidaysAPI"
import AvailableCountryCard from "../components/availableCountryCard"
import HolidayCard from "../components/holidayCard"




const HomePage = () => {
    const [availableCountries, setAvailableCountries] = useState([])
    const [upcomingHolidays, setUpcomingHolidays] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getAvailableCountries().then(data => setAvailableCountries(data))

        const upcomingHolidays = getUpcomingHolidaysWorldwide()
        upcomingHolidays.then(data => setUpcomingHolidays(data))
        setLoading(false)
    }, [])

    return (
        <>
            {loading && (
                <div>loading...</div>
            )}
            <div className="d-flex">
                <section className="full-width flex-min-height">
                    {upcomingHolidays && (
                        <>
                            <h2>Upcoming holidays worldwide</h2>
                            {upcomingHolidays.map((value: HolidayInterface, index) => (
                                < HolidayCard key={index} name={value.name} date={value.date} localName={value.localName} countries={value.countries} countryCode={value.countryCode} />
                            ))}
                        </>

                    )}
                </section>

                <section className="full-width">
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
        </>

    )
}

export default HomePage