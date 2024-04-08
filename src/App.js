import "./Styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormspreeProvider } from '@formspree/react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import Contact from "./Contact.js";
import Resume from "./Resume.js";
import Portfolio from "./Portfolio.js";
import TSS from "./Portfolio Pages/TSS.js";
import MerchMate from "./Portfolio Pages/MerchMate.js";
import AllgoodDesigns from "./Portfolio Pages/AllgoodDesigns.js";
import Revolution from "./Portfolio Pages/Revolution.js";
import Martin from "./Portfolio Pages/Martin.js";
import FungiSkull from "./Portfolio Pages/FungiSkull.js";
import BubbleDragon from "./Portfolio Pages/BubbleDragon.js";
import FloralMoth from "./Portfolio Pages/FloralMoth.js";
import Plannify from "./Portfolio Pages/Plannify.js";
import LAlogo from "./Portfolio Pages/LAlogo.js";
import ToDo from "./Portfolio Pages/ToDo.js";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allgood-Designs" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/The-Suite-Spot-Project" element={<TSS />} />
          <Route path="/portfolio/MerchMate" element={<MerchMate />} />
          <Route
            path="/portfolio/Allgood-Designs"
            element={<AllgoodDesigns />}
          />
          <Route
            path="/portfolio/Revolution-Lash-Studio"
            element={<Revolution />}
          />
          <Route path="/portfolio/image-retouching" element={<Martin />} />
          <Route path="/portfolio/Fungi-Skull" element={<FungiSkull />} />
          <Route path="/portfolio/Bubble-Dragon" element={<BubbleDragon />} />
          <Route path="/portfolio/Floral-Moth-Ink" element={<FloralMoth />} />
          <Route path="/portfolio/plannify" element={<Plannify />} />
          <Route path="/portfolio/LA-logo" element={<LAlogo />} />
          <Route path="/portfolio/ToDo-App" element={<ToDo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
