import React, { useEffect, useState } from "react";
import ResumeBtns from "../../components/ResumeBtns/ResumeBtns";
import "./ResumeInfo.css";


function ResumeInfo() { 
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const resumeData = [{
        languages: ["SPANISH", "HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS", "MONOGODB", "MYSQL", "EXPRESS"], 
        skills: ["PROLEM SOLVER", "QUICK LEARNER", "WORKS WELL UNDER PRESSURE", "TEACHABLE", "STRONG PUBLIC SPEAKER"], 
        experience: {
            "PEACE CORPS": "TEACHER OF ENGLISH AS A SECOND LANGAUGE TO ECUDORIAN HIGH SCHOOL STUDENTS",
            "OXFORD CANTEEN": "MANAGER OF A TEAM OF 12 WHILE HOLDING ANOTHER JOB AND ATTENDING SCHOOL PRE-MED",
            "UNIVERSITY OF MISSISSIPPI": "SPANISH TUTOR TO GROUPS OF UNIVERSITY STUDENTS 3 DAYS A WEEK",
            "U OF MISSISSIPPI": "COGNITIVE PSYCHOLGOY LAB RESEARCH ASSISTANT & TRAINER OF INCOMING RA'S"
        },
        leadership: {
            "SPORT CLUB COUNCIL": "PRESIDENT & COUNCIL CHAIR 2018-19 & COUNCIL CHAIR 2017-18",
            "AMERICAN MEDICAL WOMEN'S ASSOCIATION": "VICE PRESIDENT 2018-19",
            "STUDENT WELLNESS AMBASSADOR": "VICE PRESIDENT 2018-19 & PHYSICAL WELLNESS CHAIR 2017-18",
            "GLOBAL BRIGADES": "FUNDRAISING CHAIR 2018-19 & EDUCATION CHAIR 2017-18",
            "SAND VOLLEYBALL CLUB": "VICE PRESIDENT 2018-19 & SECRETARY 2017-18",
            "AMERICAN MEDICAL STUDENT ASSOCIATION": "RECRUITEMENT CHAIR 2018-19 & SERGEANT-AT-ARMS 2017-18"
        }
    }]

    const handleVisibility = (event) => {

        let clickedValue = event.target.attributes[2].value;
        // let isMatching = event.target.innerText;
        let bool = event.target.attributes[1].value;
        let id = window.document.querySelector("#" + clickedValue)

            if (!isVisible) {
                setIsVisible(!isVisible);
                id.style.display = "none";
            } else {
                setIsVisible(!isVisible);
                id.style.display = "initial";
            }

            // if (clickedValue !== isMatching) {
            //     setIsVisible(!isVisible);
            // }
        console.log(bool);    
        console.log(isVisible);
        }

    return (
        <>

        <ResumeBtns isVisible={isVisible} handleVisibility={handleVisibility} />

        <div className="populate-here">

        </div>

            {resumeData.map((data) => (
                <div style={{display: "none"}} id="LANGUAGES">
                    <ul id="languages" className="resume-data">
                        <li className="short-list">{data.languages[0]}</li>
                        <li className="short-list">{data.languages[1]}</li>
                        <li className="short-list">{data.languages[2]}</li>
                        <li className="short-list">{data.languages[3]}</li>
                        <li className="short-list">{data.languages[4]}</li>
                    </ul>

                    <ul id="languages2" className="resume-data">
                        <li className="short-list">{data.languages[5]}</li>
                        <li className="short-list">{data.languages[6]}</li>
                        <li className="short-list">{data.languages[7]}</li>
                        <li className="short-list">{data.languages[8]}</li>
                        <li className="short-list">  </li>
                    </ul>
                </div>
            ))}

            {resumeData.map((data) => (
                <ul style={{display: "none"}} id="SKILLS" className="resume-data">
                    <li>{data.skills[0]}</li>
                    <li>{data.skills[1]}</li>
                    <li>{data.skills[2]}</li>
                    <li>{data.skills[3]}</li>
                    <li>{data.skills[4]}</li>
                </ul>
            ))}

             {resumeData.map((data) => (
                 <ul style={{display: "none"}} id="EXPERIENCE" className="resume-data long-list">
                    <li className="long-list"><strong style={{fontSize: "14px"}}>PEACE CORPS: </strong>{data.experience["PEACE CORPS"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>OXFORD CANTEEN: </strong>{data.experience["OXFORD CANTEEN"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>UNIVERSITY OF MISSISSIPPI: </strong>{data.experience["UNIVERSITY OF MISSISSIPPI"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>U OF MISSISSIPPI: </strong>{data.experience["U OF MISSISSIPPI"]}</li>
                </ul>
            ))}

           {resumeData.map((data) => (
                 <ul style={{display: "none"}} id="LEADERSHIP" className="resume-data">
                    <li className="long-list"><strong style={{fontSize: "14px"}}>SPORT CLUB COUNCIL: </strong>{data.leadership["SPORT CLUB COUNCIL"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>AMERICAN MEDICAL WOMEN'S ASSOCIATION: </strong>{data.leadership["AMERICAN MEDICAL WOMEN'S ASSOCIATION"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>STUDENT WELLNESS AMBASSADOR: </strong>{data.leadership["STUDENT WELLNESS AMBASSADOR"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>GLOBAL BRIGADES: </strong>{data.leadership["GLOBAL BRIGADES"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>SAND VOLLEYBALL CLUB: </strong>{data.leadership["SAND VOLLEYBALL CLUB"]}</li>
                    <li className="long-list"><strong style={{fontSize: "14px"}}>AMERICAN MEDICAL STUDENT ASSOCIATION: </strong>{data.leadership["AMERICAN MEDICAL STUDENT ASSOCIATION"]}</li>
                </ul>
            ))}
        </>
    );
}

export default ResumeInfo;