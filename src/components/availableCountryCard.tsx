import { Dispatch, Fragment, useEffect, useState } from "react"
import { getCountryInfo } from "../services/publicHolidaysAPI"
import { useNavigate } from "react-router-dom"


const AvailableCountryCard = ({ name, countryCode }: AvailableCountryInterface) => {
    const [info, setInfo]: [CountryInfo | undefined, Dispatch<React.SetStateAction<CountryInfo | undefined>>] = useState()
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const gettingInfo = getCountryInfo(countryCode)
        gettingInfo.then(data => setInfo(data))
    }, [])

    return (
        <>
            <div onClick={() => navigate(`/${countryCode}`)} className="available-country-card" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                {name} ({countryCode})
                <Fragment>
                    {visible && info != undefined && (
                        <div className="hiddenContainer">
                            <p>region: {info.region}</p>
                            {info.borders.length > 0 && (
                                <>
                                    <p>neightbours: {info.borders.map((e) => e.commonName).join(', ')}</p>
                                </>
                            )}
                        </div>
                    )}
                </Fragment>

            </div>
        </>

    )
}

export default AvailableCountryCard