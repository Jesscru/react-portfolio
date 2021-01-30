import React from "react";
import ProfilePic from "../../assets/images/profile-pic-bw.jpg"
import HomeNav from "../../components/Nav/HomeNav";
import "./Home.css";

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
                Newly certified full-stack web developer from UCLA’s coding bootcamp leveraging a diverse 
                background of psychology, chemistry, biology, teaching, and language acquisition to use data
                and research to build an intuitive, elegant, and comfortable user experience. As design is 
                the first part of a project that the user experiences, I put an emphasis on making UI simple,
                but effective with my skills in HTML, CSS, Javascript, and React.js. The projects I’ve had 
                the pleasure of completing have truly amplified my enjoyment of teamwork dynamics—experiencing
                the highs and lows as a unit to bring to fruition a well-functioning and refined product 
                hat we can all be proud of. I’m excited to use the skills I’ve acquired but also to work 
                in an environment that challenges me to grow where I’m weak as well. </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Home;
