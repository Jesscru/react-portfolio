import React from "react";
import "./ResumeBtns.css";

const ResumeBtns = (props) => {
    return (
        <>
        <div className="category">
            <p className="cat-btn" onClick={props.handleVisibility} value="false" name="LANGUAGES">LANGUAGES</p>
            <p className="cat-btn" onClick={props.handleVisibility} value="false" name="SKILLS">SKILLS</p>
            <p className="cat-btn" onClick={props.handleVisibility} value="false" name="EXPERIENCE">EXPERIENCE</p>
            <p className="cat-btn" onClick={props.handleVisibility} value="false" name="LEADERSHIP">LEADERSHIP</p>
        </div>

        </>
    );
}

export default ResumeBtns; 