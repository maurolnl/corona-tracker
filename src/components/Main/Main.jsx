import React from "react";
import './index.css'
//import useCountryData from "../../hooks/useCountryData";
import useAllCovidData from '../../hooks/useAllCovidData'
import getCountryData from "../../utils/getCountryData";
import VaccinationCard from "../InfoCard/VaccinationCard";
import NewCasesCard from "../InfoCard/NewCasesCard";
import { normalizeKeyword, capitalizeString } from "../../utils/formatStrings";
import Spinner from "../Spinner";

const Main = ({keyword} = {keyword: null}) => {
  const {allData, loadingAllData} = useAllCovidData()
  var {data , country} = getCountryData(normalizeKeyword(keyword), allData)

  const lastSearch = keyword || localStorage.getItem('lastKeyword')
  const lastSearchNormalized = normalizeKeyword(lastSearch)

  const vaccinationData = {
    date: data?.date,
    new_vaccinations: data?.new_vaccinations,
    people_fully_vaccinated: data?.people_fully_vaccinated,
    people_fully_vaccinated_per_hundred: data?.people_fully_vaccinated_per_hundred,
    people_vaccinated: data?.people_vaccinated, 
    people_vaccinated_per_hundred: data?.people_vaccinated_per_hundred
  }

  const covidCasesData = {
    date: data?.date,
    new_cases: data?.new_cases,
    new_deaths: data?.new_deaths,
    total_cases: data?.total_cases,
    total_deaths: data?.total_deaths
  }

  return (
    <main className="main-container">
      {
        keyword ? 
          <p className="search-result">
            Results for: {""}
            <a className="search-result-highlight">{capitalizeString(lastSearchNormalized)}</a>
          </p>
          : 
          <p className="search-result">
            Last search: {""}
            <a className="search-result-highlight">{capitalizeString(lastSearchNormalized)}</a>
          </p>
      }
      {
        loadingAllData === true ? <Spinner/> 
        : 
        <div className="main-cards">
        {country !== undefined ? (
          <>
            <VaccinationCard vaccinationData={vaccinationData}/> 
            <NewCasesCard covidCasesData={covidCasesData}/>
          </>
        ) : (
          "There's no data available right now :("
        )}
      </div>
      }
   </main> 
  );
};

export default Main;
