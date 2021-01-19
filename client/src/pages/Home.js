import React from "react";
import ProfilePic from "../assets/images/profile-pic-bw.jpg"
import HomeNav from "../components/HomeNav";
import "../styling/Home.css";

function Home() {
  return (
    <div>
        <div className="container">
          <div className="about-me row">
            <div className="col-lg-4"> 
              <HomeNav />
            </div>
            <div className="col-lg-8" id="pic-div">
                <img className="profile-pic" src={ProfilePic} alt="profile of Jessica Crump" ></img>
            </div>
            <div className="col-lg-12">
                <p className="about-me-text">
                I’m currently living in Denver, but I grew up all over the Southeast U.S.. 
                I initially started college with the intention to attend medical school afterward, 
                but I changed my mind quite late—senior year of college, in fact. Therefore, when 
                I graduated I was a bit lost. I traveled for about six months before joining the Peace 
                Corps and committing the next two years of my life to teaching English in Ecuador. 
                In January of 2020, I moved my life to Ecuador. Three short months later, the pandemic 
                plagued the world and I was evacuated back to the states. Again lost, I was led to 
                remember my roots. I'm the type of person who loves to learn, build, and create and 
                has a natural knack for problem solving. I've also always had a natural facility for 
                technology—and specifically computers—so when faced with whether to change my career 
                path or not, I chose to delve further into my natural curiosities and talents. The 
                tech world seemed a relevant next step and coding, specifically, seemed to check all
                the boxes. I taught myself much of the fundamentals—html, css, and javascript before 
                enrolling in UCLA's Coding Bootcamp to learn full-stack web development. Having never 
                coded prior, other than the month I took to teach myself those few skills, this was 
                quite a challenge. However, I truly love pushing myself outside my comfort zone and 
                learning new skills. Thus, I have no regrets and I cannot wait to explore this new world. </p>
              </div>
              {/* <div className="col-lg-1"></div> */}
            </div>
          </div>
        </div>
  );
}

export default Home;
