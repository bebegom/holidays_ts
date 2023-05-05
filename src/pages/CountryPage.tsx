import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCountryHolidays, getCountryInfo } from "../services/publicHolidaysAPI"
import AvailableCountryCard from "../components/availableCountryCard"
import HolidayCard from "../components/holidayCard"

const CountryPage = () => {
    const { countryCode } = useParams()

    const [countryHolidays, setCountryHolidays] = useState([])
    const [countryInfo, setCountryInfo] = useState<CountryInfoInterface>()

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getCountryInfo(countryCode ?? '').then((data) => setCountryInfo(data))
        getCountryHolidays(countryCode ?? '').then(data => setCountryHolidays(data))

        setLoading(false)
    }, [])

    return (
        <>
            {loading && (
                <div>loading...</div>
            )}

            {countryInfo != undefined && (
                <div className="center-column">
                    <h2 className="text-align-center">
                        {countryInfo.commonName}
                    </h2>
                    <div className="d-flex">
                        <section className="full-width flex-min-height">
                            <AvailableCountryCard name={countryInfo.commonName} countryCode={countryInfo.countryCode} detailsAlwaysVisibly={true} />
                        </section>
                        {countryHolidays && (
                            <section className="full-width">
                                <h4>next upcoming holidays</h4>
                                {countryHolidays.map((holiday: HolidayInterface, index) => (
                                    <HolidayCard key={index} date={holiday.date} countries={holiday.countries} countryCode={holiday.countryCode} localName={holiday.localName} name={holiday.name} />
                                ))}
                            </section>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default CountryPage