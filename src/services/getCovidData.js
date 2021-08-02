import axios from "axios";

const url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
const urlCovidDataOWID =
  "https://covid.ourworldindata.org/data/owid-covid-data.json";

const getCovidData = async () => {
  try {
    const response = await axios.get(urlCovidDataOWID);
    
    return Object.values(response.data);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default getCovidData;
