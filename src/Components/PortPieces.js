import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../Data/portfolioData";

const PortPieces = () => {
  return (
    <div className="portfolio">
      {portfolioData.map((piece) => (
        <div key={piece.id} className="portfolio-piece">
          <Link to={piece.route} className="portfolio-link">
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={piece.imageUrl} alt={piece.title} />
              </div>
              <div className="portfolio-info">
                <h3>{piece.title}</h3>
                <p>{piece.subtitle}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortPieces;
