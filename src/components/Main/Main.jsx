import React from "react";
import './index.css'
import useCountryData from "../../hooks/useCountryData";

const Main = ({keyword} = {keyword: null}) => {
   const {countryData, emptyDataSet, loading} = useCountryData({keyword})

  return (
    <>
    {
      loading === true ? "cargando..."
      : 
      <main className="main-card">
      {emptyDataSet === false && countryData !== undefined ? (
        <div className="card-container">
          <h2 className="card-title">
            {countryData.Country !== undefined ? countryData.Country : ""}
          </h2>
          <p className="card-date">
            {countryData.Date !== undefined
              ? `Date: ${new Date(countryData.Date).toDateString()}`
              : ""}
          </p>
          <p className="card-result">
            {countryData.Cases !== undefined ? `Cases: ${countryData.Cases}` : ""}
          </p>
        </div>
      ) : (
        ""
      )}
    </main>
    }
   </> 
  );
};

export default Main;
