import React, { useEffect, useMemo, useState } from "react";
import Shorting_elem from "../components/Shorting_elem";
import Sidenavbar from "../components/Sidenavbar";
import LineChart from "../components/graphs/LineChart";
import BarChart from "../components/graphs/BarChart";
import axios from "axios";

const Year = () => {
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
  const sy = useMemo(() => insights.filter(obj => obj.start_year !== ""), [insights]);
  const ey = useMemo(() => insights.filter(obj => obj.end_year !== ""), [insights]);
  const labelsy =[...new Set(sy.map((obj) => obj.start_year).filter((obj) => obj !== ""))]
  const labelsey =[...new Set(sy.map((obj) => obj.end_year).filter((obj) => obj !== ""))]
  const intensitysy = [...new Set(sy.map((obj) => obj.intensity).filter((obj) => obj !== ""))];
  const relevancesy = [...new Set(sy.map((obj) => obj.relevance).filter((obj) => obj !== ""))];
  const intensityey = [...new Set(ey.map((obj) => obj.intensity).filter((obj) => obj !== ""))];
  const relevanceey = [...new Set(ey.map((obj) => obj.relevance).filter((obj) => obj !== ""))];
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
          s={{ endYear: false, topic: false, sector: false, country: false, region: false }}
          onFilterChange={()=>{}}
        />
      </div>
      <div className="graph w-full h-screen overflow-auto bg-gray-100 p-5 relative">
     
      
        
          <h1>view intensity and relevance (start year)</h1>
          <div className='w-full h-full flex items-center justify-center mb-10 bg-white rounded-md '>
            <LineChart d1={intensitysy} d2={relevancesy}  labels={labelsy} text1={"intensity"} text2={"relevance"} b1={"#1a2ee3"} b2={"#e12ad2"} />
             </div>
         
          <h1>view intensity and relevance (end year)</h1>
          <div className='w-full h-full flex items-center justify-center  bg-white rounded-md '>
            <BarChart d1={intensityey} d2={relevanceey}  labels={labelsey} text1={"intensity"} text2={"relevance"} bg1={"#64E0F0"} bg2={"#e12ad2"} />
             </div>
      
      </div>
    </div>
  </div>
  );
};

export default Year;
