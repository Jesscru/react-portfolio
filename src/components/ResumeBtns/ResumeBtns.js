import React from "react";
import "./ResumeBtns.css";

const ResumeBtns = (props) => {
    return (
        <>
        <div className="category">
            <p className="cat-btn" onMouseEnter={props.handleShow} onMouseLeave={props.handleHide} name="LANGUAGES">LANGUAGES</p>
            <p className="cat-btn" onMouseEnter={props.handleShow} onMouseLeave={props.handleHide} name="VALUE">VALUE</p>
            <p className="cat-btn" onMouseEnter={props.handleShow} onMouseLeave={props.handleHide} name="EXPERIENCE">EXPERIENCE</p>
            <p className="cat-btn" onMouseEnter={props.handleShow} onMouseLeave={props.handleHide} name="LEADERSHIP">LEADERSHIP</p>
        </div>

        </>
    );
}

export default ResumeBtns; 