import React, { useState } from "react";

const Shorting_elem = ({ onFilterChange, insights,countries,regions,years ,s}) => {
  // Extract unique values for filtering
  const uniqueYears = years ?? [...new Set(insights.map((obj) => obj.end_year).filter((year) => year !== ""))];

  const uniqueTopics = [...new Set(insights.map((obj) => obj.topic).filter((topic) => topic !== ""))];
  const uniqueSectors = [...new Set(insights.map((obj) => obj.sector).filter((sector) => sector !== ""))];
  const uniqueCountries = countries ?? [...new Set(insights.map((obj) => obj.country).filter((country) => country !== ""))];
  const uniqueRegions = regions ?? [...new Set(insights.map((obj) => obj.region).filter((region) => region !== ""))];
  

  const [endYear, setEndYear] = useState("");
  const [topic, setTopic] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // Handle changes for the filters
  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
    onFilterChange({ endYear: e.target.value, topic, sector ,country ,region});
  };
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    onFilterChange({ endYear, topic, sector, country,region: e.target.value});
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    onFilterChange({ endYear, topic, sector,country: e.target.value ,region});
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    onFilterChange({ endYear, topic: e.target.value, sector ,country,region});
  };

  const handleSectorChange = (e) => {
    setSector(e.target.value);
    onFilterChange({ endYear, topic, sector: e.target.value ,country,region});
  };

  return (
    <div className="flex items-center justify-center gap-5 bg-transparent">
      {/* End Year Filter */}
      {s.endYear&&<select value={endYear} onChange={handleEndYearChange} className="border rounded p-2">
        <option value="">Select Year</option>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>}
    

      {/* Topic Filter */}
      {s.topic && <select value={topic} onChange={handleTopicChange} className="border rounded p-2">
        <option value="">Select Topic</option>
        {uniqueTopics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>}

      {/* Sector Filter */}
      {s.sector&&<select value={sector} onChange={handleSectorChange} className="border rounded p-2">
        <option value="">Select Sector</option>
        {uniqueSectors.map((sector, index) => (
          <option key={index} value={sector}>
            {sector}
          </option>
        ))}
      </select>}
        {/* Country Filter */}
       {s.country &&<select value={country} onChange={handleCountryChange} className="border rounded p-2">
        <option value="">Select Country</option>
        {uniqueCountries.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>}
      {/* Region Filter */}
      {s.region&&<select value={region} onChange={handleRegionChange} className="border rounded p-2">
        <option value="">Select Region</option>
        {uniqueRegions.map((reg, index) => (
          <option key={index} value={reg}>
            {reg}
          </option>
        ))}
      </select>}
    </div>
  );
};

export default Shorting_elem;
