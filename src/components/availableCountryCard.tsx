import { Dispatch, Fragment, useEffect, useState } from "react"
import { getCountryInfo } from "../services/publicHolidaysAPI"
import { useNavigate } from "react-router-dom"

type Props = {
    name: string,
    countryCode: string,
    detailsAlwaysVisibly?: boolean,
}


const AvailableCountryCard = ({ name, countryCode, detailsAlwaysVisibly = false }: Props) => {
    const [info, setInfo]: [CountryInfoInterface | undefined, Dispatch<React.SetStateAction<CountryInfoInterface | undefined>>] = useState()
    const [visible, setVisible] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        const gettingInfo = getCountryInfo(countryCode)
        gettingInfo.then(data => setInfo(data))
    }, [])

    return (
        <>
            <div onClick={() => detailsAlwaysVisibly ? null : navigate(`/${countryCode}`)} className={`${detailsAlwaysVisibly ? '' : 'available-country-card'}`} onMouseEnter={() => detailsAlwaysVisibly ? null : setVisible(true)} onMouseLeave={() => detailsAlwaysVisibly ? null : setVisible(false)}>
                {name} ({countryCode})
                <Fragment>
                    {!detailsAlwaysVisibly && visible && info != undefined && (
                        <div>
                            <p>region: {info.region}</p>
                            {info.borders.length > 0 && (
                                <>
                                    <p>neighbours: {info.borders.map((e) => e.commonName).join(', ')}</p>
                                </>
                            )}
                        </div>
                    )}

                    {detailsAlwaysVisibly && info != undefined && (
                        <div>
                            <p>region: {info.region}</p>
                            {info.borders.length > 0 && (
                                <>
                                    <p>neighbours: {info.borders.map((e) => e.commonName).join(', ')}</p>
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