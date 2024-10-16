import React, { useEffect, useState } from "react";
import Sidenavbar from "../components/Sidenavbar";
import Shorting_elem from "../components/Shorting_elem";
import InsightsByRegionChart from "../components/InsightsByRegionChart";
import RelevanceByYearChart from "../components/RelevanceByYearChart";
import IntensityLikelihoodChart from "../components/IntensityLikelihoodChart";
import axios from "axios"
const Desboard = () => {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setInsights(response.data);
        setFilteredInsights(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
    <div>
      <div className=" w-full box-border h-screen overflow-hidden flex">
        <div className="w-[20%] h-full bg-white p-5">
          <Sidenavbar />
        </div>
        <div className="w-[80%]">
          <div className="fillterelem w-full relative bg-gray-100">
            <Shorting_elem onFilterChange={handleFilterChange} insights={insights} s={{endYear:true,topic:true,sector:true,country:true,region:true}}/>
          </div>
          <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5">
             
            <IntensityLikelihoodChart insights={filteredInsights} />
            <RelevanceByYearChart insights={filteredInsights} />
            <InsightsByRegionChart insights={filteredInsights} />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desboard;
