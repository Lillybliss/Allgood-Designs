import "./Styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import Contact from "./Contact.js";
import Resume from "./Resume.js";
import Portfolio from "./Portfolio.js";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/Allgood-Designs" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
