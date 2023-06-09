const HolidayCard = ({ name, localName, date, countryCode, countries }: HolidayInterface) => {

    return (
        <>
            <div>
                <p>{date}</p>
                <p>{name}</p>
                <p>{localName}</p>
                <p>({countryCode})</p>
            </div>
        </>

    )
}

export default HolidayCard