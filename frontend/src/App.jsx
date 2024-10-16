
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Desboard from './pages/Desboard';
import Intensity from './pages/Intensity';
import Likelihood from './pages/Likelihood';
import Relevance from './pages/Relevance';
import Year from './pages/Year';
import Country from './pages/Country';
import Topics from './pages/Topics';
import Region from './pages/Region';
import City from './pages/City';
import Info from './pages/Info';
function App() {
  return (
    <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Info />} />
          <Route path="/deshboard" element={<Desboard />} />
          <Route path="/intensity" element={<Intensity />} />
          <Route path="/likelihood" element={<Likelihood />} />
          <Route path="/relevance" element={<Relevance />} />
          <Route path="/year" element={<Year />} />
          <Route path="/country" element={<Country />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/region" element={<Region />} />
          <Route path="/city" element={<City />} />
        </Routes>
    </Router>
  );
}

export default App;
