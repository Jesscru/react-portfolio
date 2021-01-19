import React from "react";
import { Link } from "react-router-dom";
import "../styling/Nav.css";



function ResumeNav(){
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <p className="nav-links" id="brand">JESSICA CRUMP</p>
            </Link>
            <ul className="nav-links">
                <Link to={"/"}>
                    <li>HOME</li>
                </Link>
                <Link to={"/portfolio"}>
                    <li>PORTFOLIO</li>
                </Link>
                <Link to={"/contact"}>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </div>
    );
}

export default ResumeNav;