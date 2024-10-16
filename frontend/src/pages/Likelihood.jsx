import React, { useEffect, useState, useMemo } from 'react';
import Shorting_elem from '../components/Shorting_elem';
import Sidenavbar from '../components/Sidenavbar';
import PieChart from '../components/graphs/PieChart';
import axios from 'axios';
import LineChart from '../components/graphs/LineChart';

const Likelihood = () => {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setInsights(response.data);
        setFilteredInsights(response.data); // Initially, no filters applied, so show all data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const newFilteredData = insights.filter((insight) => {
      return (
        (!filters.endYear || (insight.start_year && insight.start_year <= filters.endYear)) && // Year filter
        (!filters.country || (insight.country && insight.country.includes(filters.country))) // Country filter
      );
    });
    setFilteredInsights(newFilteredData);
  };

  // Filter insights to only include those with a non-empty start_year
  const da = useMemo(() => insights.filter(obj =>obj.impact.trim() !== "" && obj.likelihood !== ""), [insights]);
  // Extract unique countries and years
  const uniqueCountries = useMemo(() => {
    return [...new Set(da.map((obj) => obj.country).filter((country) => country !== ""))];
  }, [da]);

  const uniqueYears = useMemo(() => {
    return [...new Set(da.map((obj) => obj.start_year).filter((year) => year !== ""))];
  }, [da]);

  const imp = [...new Set(da.map((obj) => obj.intensity).filter((im) => im !== ""))];
  const lik = [...new Set(da.map((obj) => obj.likelihood).filter((im) => im !== ""))];


  // Calculate total likelihood by country

  return (
    <div className="w-full box-border h-screen overflow-hidden flex">
      <div className="w-[20%] h-full bg-white p-5">
        <Sidenavbar />
      </div>
      <div className="w-[80%]">
        <div className="fillterelem w-full relative bg-gray-100 flex items-start ">
          <Shorting_elem
            insights={insights}
            countries={uniqueCountries}
            years={uniqueYears}
            s={{ endYear: true, topic: false, sector: false, country: false, region: false }}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5 relative">
          <h1>view Impact Ratio in countries (end year)</h1>
          {filteredInsights.length > 0 ? (
            <>
            <div className='w-full h-full flex items-center justify-center bg-white rounded-md mb-10'>

           <PieChart data={imp} labels={uniqueCountries} text={'Forecasted Impact Ratio by Country'}/>
            </div>
            <h1>view forcast Impact Ratio  (start year)</h1>
            <div className='w-full h-full flex items-center justify-center  bg-white rounded-md '>
            
           <LineChart d1={imp} d2={lik}  labels={uniqueYears} text1={"impact"} text2={"likelihood"} b1={"#1a2ee3"} b2={"#e12ad2"} />
            </div>
           </>
          ) : (
            <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>No data available for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likelihood;
