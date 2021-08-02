const getCountryData = (keyword, allData) => {
  let countryData = {}

  //console.log(allData);
  allData.filter(e => {
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') 
    if(e?.location?.toLowerCase() === keywordToUse.toLowerCase())
    {
      localStorage.setItem('lastKeyword', keywordToUse)
      countryData = e
    }
  })
  const dataLength = countryData?.data?.length

  const country = countryData?.location
  let data = {}
  if(countryData?.data !== undefined) {
    data = countryData.data[dataLength - 1]
  }

  return {country, data}
}

export default getCountryData