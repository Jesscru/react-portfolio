import React from "react";
import ContactNav from "../../components/Nav/ContactNav";
import MailIcon from "../../assets/images/mail-icon-border-256px.png";
import DownloadIcon from "../../assets/images/download-icon-256px.png";
import GithubIcon from "../../assets/images/github-icon-256px.png";
import LinkedInIcon from "../../assets/images/linked-in-icon-256px.png";
import ResumeDoc from "../../assets/JCrump_webdev.pdf";
import "./Contact.css";



function Contact() {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-lg-4"> 
              <ContactNav />
          </div>
          
        <div className="row smaller">
          <div className="col-sm-12">
            <p className="reach-out">Please feel free to reach me by email, visit my Github and/or LinkedIn pages, and download my resume below.</p>
          </div>
        

          <div className="social">
              <div className="col-sm-6 email">
                <a href="mailto:jessicacrump7@gmail.com" target="_blank" rel="noreferrer"><img className="contact-icon" src={MailIcon} alt="envelope icon"></img></a>
            </div>
            <div className="col-sm-6 github">
              <a href="https://github.com/Jesscru" target="_blank" rel="noreferrer"><img className="contact-icon" src={GithubIcon} alt="Github cat icon"></img></a>
            </div>
          </div>

          <div className="social">
              <div className="col-sm-6 linkedin">
                <a href="http://www.linkedin.com/in/jessicacrump7" target="_blank" rel="noreferrer"><img className="contact-icon" src={LinkedInIcon} alt="LinkedIn icon"></img></a>
              </div>
              <div className="col-sm-6 download">
                <a download="jessica_crump_resume" href={ResumeDoc} target="_blank" rel="noreferrer"><img id="download-icon" className="contact-icon" src={DownloadIcon} alt="arrow pointing into a box to signify download"></img></a>
              </div>
          </div>
        </div>
    
        </div>
      </div>
    </div>
  );
}

export default Contact;
