import React from 'react'
import LineChart from './graphs/LineChart'
const RelevanceByYearChart = ({ insights }) => {
  const years = insights.map(item => item.published.slice(0, 4)); 
  const relevance = insights.map(item => item.relevance);
  return (
    <div className="w-full h-full flex items-center justify-center px-5 bg-white rounded-md">
      {insights.length > 0 ?(<LineChart d1={relevance} labels={years} bg1={'rgba(255, 255, 255)'} b1={'#AB7EFD'} text1={"relvance by year"} text2={""}/>):(<p>No data available for the selected filters.</p>)}
      
    </div>
  )
}

export default RelevanceByYearChart
