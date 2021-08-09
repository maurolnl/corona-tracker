import React from "react";
import {formatNumber} from '../../utils/formatNumber'

const VaccinationCard = ({vaccinationData}) => {
  return (
    <div className="card-container">
      <h2 className="card-title">
        New Vaccinations: 
      </h2>
      <p className="card-result">
        {vaccinationData.new_vaccinations !== undefined ? formatNumber(vaccinationData.new_vaccinations) : ""}
      </p>

      <h2 className="card-title">People vaccinated: </h2>
      <p className="card-result">
        {vaccinationData.people_vaccinated !== undefined ? formatNumber(vaccinationData.people_vaccinated)  : ""}
      </p>
      <p className="card-plain-text">% per hundred, </p>
      <p className="card-result">
        {vaccinationData.people_vaccinated_per_hundred !== undefined ? `${vaccinationData.people_vaccinated_per_hundred } %` : ""}
      </p>

      <h2 className="card-title">People fully vaccinated: </h2>
      <p className="card-result">
        {vaccinationData.people_fully_vaccinated !== undefined ? formatNumber(vaccinationData.people_fully_vaccinated) : ""}
      </p>
      <p className="card-plain-text">% per hundred, </p>
      <p className="card-result">
        {vaccinationData.people_fully_vaccinated_per_hundred !== undefined ? `${vaccinationData.people_fully_vaccinated_per_hundred} %` : ""}
      </p>

      <p className="card-date">
        {vaccinationData.date !== undefined
          ? `Last Update: ${new Date(vaccinationData.date).toDateString()}`
          : ""}
      </p>
      
    </div>
  );
};

export default VaccinationCard;
