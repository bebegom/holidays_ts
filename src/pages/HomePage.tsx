import { useEffect, useState } from "react"
import { getAvailableCountries } from "../services/publicHolidaysAPI"
import AvailableCountryCard from "../components/availableCountryCard"




const HomePage = () => {
    const [c, setC] = useState([])

    useEffect(() => {
        const countries = getAvailableCountries()
        countries.then(data => setC(data))
    }, [])

    return (
        <div className="d-flex">
            <section id='upcomingHolidaysSection' className="full-width">
                <p>left section</p>
            </section>

            <section id='availableCountriesSection' className="full-width">
                {c && (
                    <>
                        <h2>Available countries ({c.length})</h2>

                        {c.map((value: AvailableCountryInterface) => (
                            <AvailableCountryCard key={value.countryCode} countryCode={value.countryCode} name={value.name} />
                        ))}
                    </>
                )}
            </section>
        </div>

    )
}

export default HomePage