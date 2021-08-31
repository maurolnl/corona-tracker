import React from "react";
import "./index.css";
//import useCountryData from "../../hooks/useCountryData";
import useAllCovidData from "../../hooks/useAllCovidData";
import getCountryData from "../../utils/getCountryData";
import VaccinationCard from "../InfoCard/VaccinationCard";
import NewCasesCard from "../InfoCard/NewCasesCard";
import { normalizeKeyword, capitalizeString } from "../../utils/formatStrings";
import Spinner from "../Spinner";
import SearchResultLabel from '../SearchResultLabel/SearchResultLabel'

const Main = ({ keyword } = { keyword: null }) => {
  const { allData, loadingAllData } = useAllCovidData();

  const lastKeyword = localStorage.getItem("lastKeyword")
  let lastSearch = keyword || lastKeyword;
  if(lastSearch === null || lastSearch === undefined) lastSearch = "argentina"

  var { data, country } = getCountryData(normalizeKeyword(lastSearch), allData);

  const lastSearchNormalized = normalizeKeyword(lastSearch);

  const vaccinationData = {
    date: data?.last_updated_date,
    new_vaccinations: data?.new_vaccinations,
    people_fully_vaccinated: data?.people_fully_vaccinated,
    people_fully_vaccinated_per_hundred:
      data?.people_fully_vaccinated_per_hundred,
    people_vaccinated: data?.people_vaccinated,
    people_vaccinated_per_hundred: data?.people_vaccinated_per_hundred,
  };

  const covidCasesData = {
    date: data?.last_updated_date,
    new_cases: data?.new_cases,
    new_deaths: data?.new_deaths,
    total_cases: data?.total_cases,
    total_deaths: data?.total_deaths,
  };

  return (
    <main className="main-container">
      {keyword ? (
        <>
          <SearchResultLabel label="Results for: " searchResult={capitalizeString(lastSearchNormalized)}/>
        </>
      ) : (
        <>
          <SearchResultLabel label="Last search: " searchResult={capitalizeString(lastSearchNormalized)}/>
        </>
      )}
      {loadingAllData === true ? (
        <Spinner />
      ) : (
        <div className="main-cards">
          {country !== undefined ? (
            <>
              <VaccinationCard vaccinationData={vaccinationData} />
              <NewCasesCard covidCasesData={covidCasesData} />
            </>
          ) : (
            "There's no data available right now :("
          )}
        </div>
      )}
    </main>
  );
};

export default Main;
