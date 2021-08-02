import axios from 'axios'
import getDate from '../utils/getDate'


const getCovidDataByCountry = async (country) => {
  const {today, yesterday} = getDate()

  const reqAllRecovered = `https://api.covid19api.com/country/${country}/status/recovered?from=${yesterday}&to=${today}`
  const reqAllConfirmed = `https://api.covid19api.com/country/${country}/status/confirmed?from=${yesterday}&to=${today}`

  try {
    const allConfirmedResponse = await axios.get(reqAllConfirmed)
    const allRecoveredResponse = await axios.get(reqAllRecovered)

    console.log(allConfirmedResponse.data, allRecoveredResponse.data);
    const resLength = allConfirmedResponse.data.length

    return allConfirmedResponse.data[resLength - 1]
  }catch(error) {
    console.log(error);
    return false
  }
  /*const allConfirmed = allConfirmedResponse.data[1].Cases - allConfirmedResponse.data[0].Cases
  const allRecovered = allRecoveredResponse.data[1].Cases - allRecoveredResponse.data[0].Cases

  console.log(allConfirmed, allRecovered);
  return allConfirmedResponse.data[1]*/
}

export default getCovidDataByCountry