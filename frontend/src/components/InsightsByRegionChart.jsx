import React from "react";
import PieChart from "./graphs/PieChart";
const InsightsByRegionChart = ({ insights }) => {
  const regions = insights.map(item => item.region);
  const regionCounts = regions.reduce((acc, region) => {
    acc[region] = (acc[region] || 0) + 1;
    return acc;
  }, {});

  return (
     <>
        <div className="w-full h-[100vh] flex items-center justify-center px-5 mt-10 bg-white rounded-md text-black">
        {insights.length > 0 ?(<PieChart text={'Insights by Region'} data={Object.values(regionCounts)} labels={Object.keys(regionCounts)}/>):(<p>No data available for the selected filters.</p>)}
        </div>
     </>
  );
};

export default InsightsByRegionChart;
