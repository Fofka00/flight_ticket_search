import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import FlightSearchPage from './components/FlightSearchPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FlightSearchPage />} />
        <Route path="/search" element={<FlightSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;