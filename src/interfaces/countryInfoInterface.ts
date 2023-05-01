interface CountryInfo {
    commonName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: Array<{
        commonName: string,
        officialName: string,
        countryCode: string,
        region: string,
        borders: null
    }>,
}