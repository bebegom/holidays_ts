import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCountryHolidays, getCountryInfo } from "../services/publicHolidaysAPI"
import AvailableCountryCard from "../components/availableCountryCard"

const CountryPage = () => {
    const { countryCode } = useParams()

    const [countryHolidays, setCountryHolidays] = useState([])
    const [countryInfo, setCountryInfo] = useState<CountryInfoInterface>()

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getCountryInfo(countryCode ?? '').then((data) => setCountryInfo(data))

        const thisYear: number = new Date().getFullYear()
        getCountryHolidays(thisYear.toString(), countryCode ?? '').then(data => setCountryHolidays(data))

        setLoading(false)
    }, [])

    return (
        <>
            {loading && (
                <div>loading...</div>
            )}

            {countryInfo != undefined && (
                <div className="d-flex-column center-column bg-c">
                    {countryInfo.commonName}
                    <div className="d-flex h-center bg-c-2">
                        <section>
                            <AvailableCountryCard name={countryInfo.commonName} countryCode={countryInfo.countryCode} detailsAlwaysVisibly={true} />
                        </section>
                    </div>
                    {countryHolidays && (
                        <div>
                            {countryHolidays.map((holiday: HolidayInterface, index) => (
                                <div key={index}>
                                    {holiday.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default CountryPage