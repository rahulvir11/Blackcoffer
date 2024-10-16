import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Shorting_elem from '../components/Shorting_elem';
import Sidenavbar from '../components/Sidenavbar';
import BarChart from '../components/graphs/BarChart';

const Intensity = () => {
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
        (!filters.endYear || (insight.end_year && insight.end_year <= filters.endYear)) && // Year filter
        (!filters.region || insight.region.includes(filters.region)) && // Region filter
        (!filters.country || insight.country.includes(filters.country)) // Country filter
      );
    });
    setFilteredInsights(newFilteredData);
  };

  // Get unique filters for Dropdowns
  const uniqueCountries = [...new Set(insights.map((obj) => obj.country).filter((country) => country !== ""))];
  const uniqueRegions = [...new Set(insights.map((obj) => obj.region).filter((region) => region !== ""))];
  const uniqueYears = [...new Set(insights.map((obj) => obj.end_year).filter((year) => year !== ""))];

  // Prepare chart data
  const labels = [...new Set(
    filteredInsights
      .filter(insight => (insight.country && insight.country.trim() !== "") || (insight.region && insight.region.trim() !== ""))
      .map(insight => insight.country.trim() !== "" ? insight.country : insight.region)
  )];
  
  const intensityData = filteredInsights.map(insight => insight.intensity || 0);

  return (
    <div className="w-full box-border h-screen overflow-hidden flex">
      <div className="w-[20%] h-full bg-white p-5">
        <Sidenavbar />
      </div>
      <div className="w-[80%]">
        <div className="filterelem w-full relative bg-gray-100">
          <Shorting_elem
            onFilterChange={handleFilterChange}
            insights={insights}
            countries={uniqueCountries}
            regions={uniqueRegions}
            years={uniqueYears}
            s={{endYear:true,topic:false,sector:false,country:true,region:true}}
          />
        </div>

        <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5 relative">
        <h1>highest Intensity in Country/Region (End Year)</h1>

          {filteredInsights.length > 0 ? (
            <BarChart
            horizontal={true}
              labels={labels}
              d1={intensityData}
              d2={""}
              title_1={"Intensity"}
              title_2={""}
              bg1={"#FFD065"}
              bg2={""}
            />
          ) : (
            <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>No data available for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intensity;
