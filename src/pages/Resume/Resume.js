import React from "react";
import ResumeNav from "../../components/Nav/ResumeNav";
import ResumeInfo from "../../components/ResumeInfo/ResumeInfo";


function Resume() {
  return (
    <div >
     <div className="container">
        <div className="row">
          <div className="col-lg-4"> 
              <ResumeNav />
          </div>

          <div className="col-lg-8">
            <ResumeInfo className="resume-display"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
