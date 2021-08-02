import React from "react";
import { formatNumber } from "../../utils/formatNumber";

const NewCasesCard = ({covidCasesData}) => {
  console.log(covidCasesData);
  return (
    <div className="card-container">
      <h2 className="card-title">
        New Covid Cases  
      </h2>
      <p className="card-result">
        {covidCasesData.new_cases !== undefined ? formatNumber(covidCasesData.new_cases) : ""}
      </p>

      <h2 className="card-title">
        New Covid Deaths  
      </h2>
      <p className="card-result">
        {covidCasesData.new_deaths !== undefined ? formatNumber(covidCasesData.new_deaths) : ""}
      </p>

      <h2 className="card-title">
        Covid Total Cases  
      </h2>
      <p className="card-result">
        {covidCasesData.total_cases !== undefined ? formatNumber(covidCasesData.total_cases) : ""}
      </p>

      <h2 className="card-title">
        Covid Total Deaths  
      </h2>
      <p className="card-result">
        {covidCasesData.total_deaths !== undefined ? formatNumber(covidCasesData.total_deaths) : ""}
      </p>

      <p className="card-date">
        {covidCasesData.date !== undefined
          ? `Date: ${new Date(covidCasesData.date).toDateString()}`
          : ""}
      </p>
    </div>
  );
};

export default NewCasesCard;
