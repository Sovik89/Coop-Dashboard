//-------------------------------------------------------------------------------------------

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ForecastDashboard from "./components/ForecastDashboard";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<ForecastDashboard />} />
      </Routes>
    </Router>
  );
 
}

export default App;

