const getCountryData = (keyword, allData) => {
  let data = {}

  allData.filter(e => {
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') 
    if(e?.location?.toLowerCase() === keywordToUse.toLowerCase())
    {
      localStorage.setItem('lastKeyword', keywordToUse)
      data = e
    }
  })
  console.log(data);
  const country = data?.location 
  /*const dataLength = countryData?.data?.length

  const country = countryData?.location
  let data = {}
  if(countryData?.data !== undefined) {
    data = countryData.data[dataLength - 1]
  }

  */
  return {data, country}
}

export default getCountryData