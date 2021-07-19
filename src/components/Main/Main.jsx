import React, { useEffect, useState } from "react";
import getCovidDataByCountry  from '../../services/getCovidByCountry'

const Main = ({keyword}) => {
  const [countryData, setCountryData] = useState('')
  const [emptyDataSet, setEmptyDataSet] = useState(false)
  
  useEffect(async function() {
    setEmptyDataSet(false)
    const data = await getCovidDataByCountry(keyword)
    console.log(data);
    if(data === false) {
      setEmptyDataSet(true)
    } else {
      setCountryData(data)
    }
  }, [keyword])

  return (
    <main>
      {emptyDataSet === false && countryData !== undefined ? (
        <div>
          <h2>
            {countryData.Country !== undefined ? countryData.Country : ""}
          </h2>
          <p>
            {countryData.Date !== undefined
              ? new Date(countryData.Date).toDateString()
              : ""}
          </p>
          <p>{countryData.Cases !== undefined ? countryData.Cases : ""}</p>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
