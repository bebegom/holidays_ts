import { Dispatch, useState } from "react"
import { useParams } from "react-router-dom"

const CountryPage = () => {
    const { countryCode } = useParams()
    const [holidays, setHolidays]: ['CountryInfo' | undefined, Dispatch<React.SetStateAction<'CountryInfo' | undefined>>] = useState()

    return (
        <div>
            {countryCode}
        </div>
    )
}

export default CountryPage