import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { PDF } from "./components/PDF"; // Import Main component for routing
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route 
          path="/" 
          element={
            <div>
              <Navigation />
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </div>
          } 
        />
        
        {/* Main page route */}
        <Route path="/PDF" element={<PDF />} />
      </Routes>
    </Router>
  );
};

export default App;
