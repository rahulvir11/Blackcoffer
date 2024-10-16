import React from 'react'
import BarChart from "./graphs/BarChart";

const IntensityLikelihoodChart = ({ insights }) => {
  const topics = insights.map((item) => item.topic);
  const intensity = insights.map((item) => item.intensity);
  const likelihood = insights.map((item) => item.likelihood);
  return (
    <div className="w-full h-full px-5 bg-white rounded-md mb-10 flex items-center justify-center">
    {insights.length > 0 ?(<BarChart
      labels={topics}
      horizontal={false}
      d1={intensity}
      d2={  likelihood}
      text1={"Intensity"}
      text2={"Likelihood"}
      bg1={"#64E0F0"}
      bg2={"#FFD065"}
    />):(<p>No data available for the selected filters.</p>)}
  </div>
  )
}

export default IntensityLikelihoodChart
