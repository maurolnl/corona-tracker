import { useState, useEffect } from "react"
import getCovidData from "../services/getCovidData"

export default function useCountryData() {
  const [allData, setAllData] = useState([])
  const [loadingAllData, setLoadingAllData] = useState(false)

  useEffect(async function() {
    setLoadingAllData(true)

    let response = []
    const emptyDataSet = allData.length === 0 
    if(emptyDataSet) 
    {
      response = await getCovidData()
    }
    setAllData(response)
    setLoadingAllData(false)
  }, []) 

  return {allData, loadingAllData}
}
