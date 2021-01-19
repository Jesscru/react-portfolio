import React from "react";
import PortfolioNav from "../components/PortfolioNav";
import WeatherDashboard from "../assets/images/weather-dashboard-data.png";
import IceBox from "../assets/images/icebox-screenshot.png";
import SearchAndRescue from "../assets/images/search-and-rescue.png";
import CodeQuiz from "../assets/images/coding-quiz-homepage.png";
import "../styling/Portfolio.css"


function Portfolio() {
  return (
    <div >

      <div className="container flex">    
        <div className="row">
          <div className="col-xl-4">
            <PortfolioNav />
          </div>

            <div className="project-display col-xl-8">

              <p id="instructions">Click any image to navigate to the project</p>

              <div className="row">
                <div className="col-xl-6">
                  <a href="https://jesscru.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={WeatherDashboard} alt="screenshot of weather dashboard with populated data of Tokyo"></img></a>
                  <a href="https://github.com/Jesscru/weather-dashboard" className="repo-link" target="_blank"><p className="project-title">Weather Dashboard repository</p></a>                        
                </div>
                <div className="col-xl-6">
                  <a href="https://github.com/Jesscru/portfolio" target="_blank" rel="noreferrer"><img className="portfolio-image" src={IceBox} alt="sceenshot of Icebox App landing page"></img></a>
                  <a href="https://infinite-castle-57105.herokuapp.com/" className="repo-link" target="_blank"><p className="project-title">IceBox repository</p></a>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <a href="https://candygarcia014.github.io/search-and-rescue/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={SearchAndRescue} alt="screenshot of homepage of Search and Rescue App"></img></a>
                  <a href="https://github.com/candygarcia014/search-and-rescue" className="repo-link" target="_blank"><p className="project-title">Search and Rescue repository</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="https://jesscru.github.io/coding-quiz/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={CodeQuiz} alt="screenshot of homepage of U.S facts quiz"></img></a>
                  <a href="https://github.com/Jesscru/coding-quiz" className="repo-link" target="_blank"><p className="project-title">U.S Facts Quiz repository</p></a>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Portfolio;
