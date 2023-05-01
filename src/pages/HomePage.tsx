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
        <div>
            {c && (
                <>
                    <h2>Available countries ({c.length})</h2>

                    {c.map((value: AvailableCountryInterface) => (
                        <AvailableCountryCard key={value.countryCode} countryCode={value.countryCode} name={value.name} />
                    ))}
                </>
            )}
        </div>
    )
}

export default HomePage