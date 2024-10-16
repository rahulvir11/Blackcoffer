import React, { useEffect, useState } from "react";
import Shorting_elem from "../components/Shorting_elem";
import Sidenavbar from "../components/Sidenavbar";
import axios from "axios";
import LineChart from "../components/graphs/LineChart";

const Relevance = () => {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setInsights(response.data);
        setFilteredInsights(response.data); // Initially, no filters applied, so show all data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const years = filteredInsights.map((item) => item.published.split(",")[0]);
  const relevance = filteredInsights.map((item) => item.relevance);
  const handleFilterChange = (filters) => {
    const newFilteredData = insights.filter((insight) => {
      return (
        (!filters.endYear || insight.end_year <= filters.endYear) && // Year filter
        (!filters.topic || insight.topic.includes(filters.topic)) && // Topic filter
        (!filters.sector || insight.sector.includes(filters.sector)) && // Sector filter
        (!filters.region || insight.region.includes(filters.region)) && // Region filter
        (!filters.country || insight.country.includes(filters.country)) // Country filter
      );
    });

    setFilteredInsights(newFilteredData);
  };
  return (
    <div className="w-full box-border h-screen overflow-hidden flex">
      <div className="w-[20%] h-full bg-white p-5">
        <Sidenavbar />
      </div>
      <div className="w-[80%]">
        <div className="fillterelem w-full relative bg-gray-100 flex items-start ">
          <Shorting_elem
            insights={insights}
            countries={null}
            years={null}
            s={{
              endYear: true,
              topic: true,
              sector: true,
              country: true,
              region: false,
            }}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5 relative">
          <h1>view relevance </h1>
          {filteredInsights.length > 0 ? (
            <>
              <div className="w-full h-full flex items-center justify-center  bg-white rounded-md ">
                <LineChart
                  d1={relevance}
                  d2={[]}
                  labels={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                  text1={"relevance"}
                  text2={""}
                  b1={"#1a2ee3"}
                  b2={"#fff"}
                  bg2={"#fff"}
                />
              </div>
            </>
          ) : (
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              No data available for the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Relevance;
