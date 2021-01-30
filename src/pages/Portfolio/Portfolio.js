import React from "react";
import PortfolioNav from "../../components/Nav/PortfolioNav";
import WeatherDashboard from "../../assets/images/weather-dashboard-data.png";
import IceBox from "../../assets/images/icebox-screenshot.png";
import SearchAndRescue from "../../assets/images/search-and-rescue.png";
import CodeQuiz from "../../assets/images/coding-quiz-homepage.png";
import Landpad from "../../assets/images/landpad-landing.png"
import EmpDir from "../../assets/images/emp-dir-landing.png"
import "./Portfolio.css"


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
                  <a href="https://jesscru.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={WeatherDashboard} alt="screenshot of weather dashboard with populated data of Tokyo"></img></a>
                  <a href="https://github.com/Jesscru/weather-dashboard" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">Weather Dashboard repository</p></a>                        
                </div>
                <div className="col-xl-6">
                  <a href="https://infinite-castle-57105.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={IceBox} alt="sceenshot of Icebox App landing page"></img></a>
                  <a href="https://github.com/brandonleepiercy/sneaker-wikipedia" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">IceBox repository</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="https://mysterious-beyond-10068.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={Landpad} alt="screenshot of homepage of Search and Rescue App"></img></a>
                  <a href="https://github.com/mfitzwinick/landpad" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">LAND PAD Repository</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="https://jesscru.github.io/coding-quiz/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={CodeQuiz} alt="screenshot of homepage of U.S facts quiz"></img></a>
                  <a href="https://github.com/Jesscru/coding-quiz" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">U.S Facts Quiz repository</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="https://candygarcia014.github.io/search-and-rescue/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={SearchAndRescue} alt="screenshot of homepage of Search and Rescue App"></img></a>
                  <a href="https://github.com/candygarcia014/search-and-rescue" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">Search and Rescue repository</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="https://jesscru.github.io/employee-directory/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={EmpDir} alt="screenshot employee directory pagez"></img></a>
                  <a href="https://github.com/Jesscru/employee-directory" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">Employee Directory repository</p></a>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Portfolio;
