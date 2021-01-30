import React from "react";
import ResumeNav from "../../components/Nav/ResumeNav";
import ResumeCards from "../../components/ResumeCards/ResumeCards";


function Resume() {
  return (
    <div >
     <div className="container">
        <div className="row">
          <div className="col-lg-4"> 
              <ResumeNav />
          </div>

          <div className="col-lg-8">
            <ResumeCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
