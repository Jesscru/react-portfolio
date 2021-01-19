import React from "react";
import "../styling/ResumeCard.css";

// class ResumeCard extends Component {
//     state = {
//         showText: false
//     }

// handleShowText = () => this.setState({ showText: true });
// handleHideText = () => this.setState({ showText: false});

//   render() {

const resumeInfo = {
    skills: {
        general: ['Web development',  'Team collaboration', 'Teaching and training', 'Attentive to detail', 'Malleable and adaptable'],
        codingSpecific: ['HTML', 'CSS', 'Javascript']
    },

    workExperience: {
        'Peace Corps': 'Taught English as a second language to Ecuadorian high school students',
        'Restaurant manager': 'Trained numerous employees, delegated work duties, counted and balanced cash register',
        'U of Miss Tutor': 'Provided Spanish help and practice to university students'
    }, 

    leadershipOther: {
        'Reasearch assistant': 'Worked with a team to study cognitive function in children; handled data collection and entry',
        'President of Sport Club Council': 'Collaborated with council members to make decisions about the organization as a whole as well as decisions about each sport club',
        'Vice president of Wellness Ambassadors': 'Assisted each of 4 wellness subgroups in running their programs and events'
    }, 

    education: {
        university: 'University of Mississippi', 
        years: 'August 2015-May 2019',
        major: 'B.A. Psychology', 
        minors: 'Spanish, chemistry, biology',
        GPA: 3.74
    }
};
    

function ResumeCards() { 
    return (
        <>
            <div className="skills"> Skills
                <ul id="skill-list">
                    <li>{resumeInfo.skills.general[0]}</li>
                    <li>{resumeInfo.skills.general[1]}</li>
                    <li>{resumeInfo.skills.general[2]}</li>
                    <li>{resumeInfo.skills.general[3]}</li>
                    <li>{resumeInfo.skills.general[4]}</li>
                </ul>
            </div>
            
            <div className="education"> Education
                <ul id="education-list">
                    <li>{resumeInfo.education.university}</li>
                    <li>{resumeInfo.education.years}</li>
                    <li>{resumeInfo.education.major}</li>
                    <li>{resumeInfo.education.minors}</li>
                    <li>{resumeInfo.education.GPA}</li>
                </ul>
            </div>


            <div className="experience"> Experience
                <ul id="experience-list">
                    <li>{resumeInfo.workExperience["Peace Corps"]}</li>
                    <li>{resumeInfo.workExperience["Reasearch assistant"]}</li>
                    <li>{resumeInfo.workExperience["Restaurant manager"]}</li>
                    <li>{resumeInfo.workExperience["U of Miss Tutor"]}</li>
                </ul>
            </div>

            {/* <div
                onMouseOver={this.handleShowText}
                onMouseLeave={this.handleHideText}
                className={`skills-container${this.state.showText ? " show" : ""}`}>
                <div className="skills-wrapper">Skills
                    <div className="skills">
                        
                    </div>
                </div>
            </div>

            <div
                onMouseOver={this.handleShowText}
                onMouseLeave={this.handleHideText}
                className={`education-container${this.state.showText ? " show" : ""}`}>
                <div className="education-wrapper">Education
                    <div className="education">

                    </div>
                </div>
            </div>

            <div
                onMouseOver={this.handleShowText}
                onMouseLeave={this.handleHideText}
                className={`experience-container${this.state.showText ? " show" : ""}`}>
                <div className="experience-wrapper">Experience
                    <div className="experience">

                    </div>
                </div>
            </div> */}


        </>
    );
  }

export default ResumeCards;