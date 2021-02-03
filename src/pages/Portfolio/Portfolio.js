import React from "react";
import PortfolioNav from "../../components/Nav/PortfolioNav";
import WeatherDashboard from "../../assets/images/weather-dashboard-data.png";
import IceBox from "../../assets/images/icebox-screenshot.png";
import SearchAndRescue from "../../assets/images/search-and-rescue.png";
import CodeQuiz from "../../assets/images/coding-quiz-homepage.png";
import Landpad from "../../assets/images/landpad-landing.png"
import "./Portfolio.css"


function Portfolio() {
  return (
    <div >

      <div className="container flex">    
        <div className="row">
          <div className="col-xl-4">
            <PortfolioNav />
          </div>

          <div className="col-xl-8" id="port-cont">
                          
            <div className="project-display">
            <p id="instructions">Click any image to navigate to the project's deployed app</p>
            
              <div className="individual">
                <p className="project-title">ICEBOX</p>
                <a href="https://infinite-castle-57105.herokuapp.com/" rel="noreferrer" target="_blank"><img className="portfolio-image" alt="Icebox App landing page" src={IceBox}></img></a>
                <p className="description">This app provides an "encyclopedia" for those in the market for limited edition sneakers. Users can search through a database of shoes and find or filter by information such as size range, color options, and or price. Javascript, Express, MySql, HTML, CSS were the tools used to build the app.</p>
                <a href="https://github.com/brandonleepiercy/sneaker-wikipedia" className="repo-link" rel="noreferrer" target="_blank">View the IceBox repository here.</a>
              </div>

              <div className="individual">
                <p className="project-title">LAND PAD</p>
                <a href="https://mysterious-beyond-10068.herokuapp.com/"  rel="noreferrer" target="_blank"><img className="portfolio-image" alt="login/signup page of landpad" src={Landpad}></img></a>
                <p className="description">This app creates a social space where those interested or involved with real-estate can come to make, view, like, and save posts. They can also use the app as a source for inspiration and save things to their vision board by clicking the vison icon. The app brings many who, in the real-estate business would otherwise interact infrequently or not all, togehter. React.js, Express, MongooseODM, CSS were the tools used to build the app.</p>
                <a href="https://github.com/mfitzwinick/landpad" className="repo-link" rel="noreferrer" target="_blank">View the LAND PAD repository here</a>
              </div>

              <div className="individual">
                <p className="project-title">WEATHER DASHBOARD</p>
                <a href="https://jesscru.github.io/weather-dashboard/" rel="noreferrer" target="_blank"><img className="portfolio-image" src={WeatherDashboard} alt="weather dashboard with populated data of Tokyo"></img></a>
                <p className="description">The weather dasboard app allows the user to search any city in the world and view its current and following 7-day forecast. Previously viewed cities are saved too so the user may click on the city and re-display the forecast data. HTML, CSS, Javascript were the tools used to buiild the project. </p>
                <a href="https://github.com/Jesscru/weather-dashboard" className="repo-link" rel="noreferrer" target="_blank">View the Weather Dashboard repository here</a> 
              </div>  
              
              <div className="individual"> 
                <p className="project-title">U.S. FACTS QUIZ</p>
                <a href="https://jesscru.github.io/coding-quiz/" rel="noreferrer" target="_blank"><img className="portfolio-image" alt="landing page to the coding quiz" src={CodeQuiz}></img></a>
                <p className="description">The is a quiz app that moves through a series of 5 questions regarding U.S. history. Upon getting the answer wrong, the user loses 5 time points (i.e. they lose 5 seconds from their allotted quiz time). At the end, the user can save his or her score for the leaderboard. HTML, CSS, Javascript were the tools used to buiild the quiz.</p>
                <a href="https://github.com/Jesscru/coding-quiz" className="repo-link" rel="noreferrer" target="_blank">View the U.S Facts Quiz repository here</a>
              </div>

              <div className="individual">
                <p className="project-title">SEARCH AND RESCUE</p>
                <a href="https://candygarcia014.github.io/search-and-rescue/" rel="noreferrer" target="_blank"><img className="portfolio-image" src={SearchAndRescue} alt="homepage of Search and Rescue App"></img></a>
                <p className="description">This project is a provides a database of adoptable animals in one's area. The user can input their locale and search for an animal to adopt in their area. Also if the user would like more information on a dog breed before adopting, they may use the "Learn about a Breed" section to get information such as temperament, size, and lifespan. HTML, CSS, Javascript were the tools used to buiild the app.</p>
                <a href="https://github.com/candygarcia014/search-and-rescue" className="repo-link" rel="noreferrer" target="_blank">View the Search and Rescue repository here</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Portfolio;
