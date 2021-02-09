import React from "react";
import ResumeBtns from "../../components/ResumeBtns/ResumeBtns";
import "./ResumeInfo.css";


function ResumeInfo() { 
    // const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     setIsVisible(true);
    // }, []);


    const resumeData = [{
        languages: ["SPANISH", "HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS", "MONOGODB", "MYSQL", "EXPRESS"], 
        value: ["PROLEM SOLVER", "QUICK LEARNER", "WORKS WELL UNDER PRESSURE", "TEACHABLE", "TAKES INITIATIVE", "INFECTIOUS ENERGY"], 
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

  
    const handleHide = (event) => {

        let clickedValue = event.target.attributes[1].value;
        let id = window.document.querySelector("#" + clickedValue)

            if (clickedValue === "LANGUAGES") {
                id.style.display = "none";
            } else if (clickedValue === "VALUE") {
                id.style.display = "none";
            } else if (clickedValue === "EXPERIENCE") {
                id.style.display = "none";
            } else if (clickedValue === "LEADERSHIP") {
                id.style.display = "none";
            }
    }
        

    const handleShow = (event) => {

        let clickedValue = event.target.attributes[1].value;
        let id = window.document.querySelector("#" + clickedValue)

            if (clickedValue === "LANGUAGES") {
                id.style.display = "initial";
            } else if (clickedValue === "VALUE") {
                id.style.display = "initial";
            } else if (clickedValue === "EXPERIENCE") {
                id.style.display = "initial";
            } else if (clickedValue === "LEADERSHIP") {
                id.style.display = "initial";
            }
    }

    return (
        <div className="populate-here">

        <ResumeBtns handleHide={handleHide} handleShow={handleShow} />

            {resumeData.map((data) => (
                <div className="short">
                    <ul style={{display: "none"}} id="LANGUAGES" className="resume-data">
                        <li>{data.languages[0]}</li>
                        <li>{data.languages[1]}</li>
                        <li>{data.languages[2]}</li>
                        <li>{data.languages[3]}</li>
                        <li>{data.languages[4]}</li>
                        <li className="short-list">{data.languages[5]}</li>
                        <li>{data.languages[6]}</li>
                        <li>{data.languages[7]}</li>
                        <li>{data.languages[8]}</li>
                    </ul>
                </div>
            ))}

            {resumeData.map((data) => (
                <div className="short">
                    <ul style={{display: "none"}} id="VALUE" className="resume-data">
                        <li>{data.value[0]}</li>
                        <li>{data.value[1]}</li>
                        <li>{data.value[2]}</li>
                        <li className="short-list">{data.value[3]}</li>
                        <li>{data.value[4]}</li>
                        <li>{data.value[5]}</li>
                    </ul>
                </div>
            ))}

             {resumeData.map((data) => (
                 <ul style={{display: "none"}} id="EXPERIENCE" className="resume-data long-list">
                    <li className="long-list"><strong>PEACE CORPS: </strong>{data.experience["PEACE CORPS"]}</li>
                    <li className="long-list"><strong>OXFORD CANTEEN: </strong>{data.experience["OXFORD CANTEEN"]}</li>
                    <li className="long-list"><strong>UNIVERSITY OF MISSISSIPPI: </strong>{data.experience["UNIVERSITY OF MISSISSIPPI"]}</li>
                    <li className="long-list"><strong>U OF MISSISSIPPI: </strong>{data.experience["U OF MISSISSIPPI"]}</li>
                </ul>
            ))}

           {resumeData.map((data) => (
                 <ul style={{display: "none"}} id="LEADERSHIP" className="resume-data">
                    <li className="long-list"><strong>SPORT CLUB COUNCIL: </strong>{data.leadership["SPORT CLUB COUNCIL"]}</li>
                    <li className="long-list"><strong>AMERICAN MEDICAL WOMEN'S ASSOCIATION: </strong>{data.leadership["AMERICAN MEDICAL WOMEN'S ASSOCIATION"]}</li>
                    <li className="long-list"><strong>STUDENT WELLNESS AMBASSADOR: </strong>{data.leadership["STUDENT WELLNESS AMBASSADOR"]}</li>
                    <li className="long-list"><strong>GLOBAL BRIGADES: </strong>{data.leadership["GLOBAL BRIGADES"]}</li>
                    <li className="long-list"><strong>SAND VOLLEYBALL CLUB: </strong>{data.leadership["SAND VOLLEYBALL CLUB"]}</li>
                    <li className="long-list"><strong>AMERICAN MEDICAL STUDENT ASSOCIATION: </strong>{data.leadership["AMERICAN MEDICAL STUDENT ASSOCIATION"]}</li>
                </ul>
            ))}
        </div>
    );
}

export default ResumeInfo;