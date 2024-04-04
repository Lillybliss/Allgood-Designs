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
import MerchMate from "./Portfolio Pages/MerchMate.js";
import AllgoodDesigns from "./Portfolio Pages/AllgoodDesigns.js";
import Revolution from "./Portfolio Pages/Revolution.js";
import Martin from "./Portfolio Pages/Martin.js";
import FungiSkull from "./Portfolio Pages/FungiSkull.js";
import BubbleDragon from "./Portfolio Pages/BubbleDragon.js";
import FloralMoth from "./Portfolio Pages/FloralMoth.js";
import Plannify from "./Portfolio Pages/Plannify.js";
import LAlogo from "./Portfolio Pages/LAlogo.js";

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
          <Route
            path="/Allgood-Designs/portfolio/MerchMate"
            element={<MerchMate />}
          />
          <Route
            path="/Allgood-Designs/portfolio/Allgood-Designs"
            element={<AllgoodDesigns />}
          />
          <Route
            path="/Allgood-Designs/portfolio/Revolution-Lash-Studio"
            element={<Revolution />}
          />
          <Route
            path="/Allgood-Designs/portfolio/image-retouching"
            element={<Martin />}
          />
          <Route
            path="/Allgood-Designs/portfolio/Fungi-Skull"
            element={<FungiSkull />}
          />
          <Route
            path="/Allgood-Designs/portfolio/Bubble-Dragon"
            element={<BubbleDragon />}
          />
          <Route
            path="/Allgood-Designs/portfolio/Floral-Moth-Ink"
            element={<FloralMoth />}
          />
          <Route
            path="/Allgood-Designs/portfolio/plannify"
            element={<Plannify />}
          />
          <Route
            path="/Allgood-Designs/portfolio/LA-logo"
            element={<LAlogo />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
