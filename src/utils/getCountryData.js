const getCountryData = (keyword, allData) => {
  let data = {}

  allData.filter(e => {
    if(e?.location?.toLowerCase() === keyword.toLowerCase())
    {
      localStorage.setItem('lastKeyword', keyword)
      data = e
    }
  })
  console.log(data);
  const country = data?.location 

  return {data, country}
}

export default getCountryData