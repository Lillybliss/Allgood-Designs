import "./Styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import Contact from "./Contact.js";
import Resume from "./Resume.js";
import Portfolio from "./Portfolio.js";
import TSS from "./Portfolio Pages/TSS.js";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/Allgood-Designs" element={<Home />} />
          <Route path="/Allgood-Designs/contact" element={<Contact />} />
          <Route path="/Allgood-Designs/resume" element={<Resume />} />
          <Route path="/Allgood-Designs/portfolio" element={<Portfolio />} />
          <Route
            path="/Allgood-Designs/portfolio/The-Suite-Spot-Project"
            element={<TSS />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
