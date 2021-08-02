import { useState, useEffect } from "react"
import getCovidDataByCountry from "../services/getCovidByCountry"
import getCovidData from "../services/getCovidData"

export default function useCountryData({keyword} = { keyword: null }) {
  const [countryData, setCountryData] = useState('')
  const [emptyDataSet, setEmptyDataSet] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(async function() {
    setEmptyDataSet(false)
    setLoading(true)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') 
    const data = await getCovidDataByCountry(keywordToUse)

    setLoading(false)

    if(data === false) {
      setEmptyDataSet(true)
    } else {
      setCountryData(data)
      localStorage.setItem('lastKeyword', keywordToUse)
    }

  }, [keyword]) 

  return {countryData, emptyDataSet, loading}
}
