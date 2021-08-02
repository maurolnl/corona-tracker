import { useState, useEffect } from "react"

export default function useCountryData({keyword, allData} = { keyword: null }) {
  const [countryData, setCountryData] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(async function() {
    setLoading(true)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') 
    console.log(allData);

    /*allData.filter(elem => {
      if(elem.country.toLowerCase() == keywordToUse.toLowerCase()) 
      {
        setCountryData(elem)
      }
    })

    setLoading(false)
    setCountryData(data)
*/
    localStorage.setItem('lastKeyword', keywordToUse)
  }, [keyword]) 

  return {countryData, loading}
}
