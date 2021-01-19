import React from "react";
import { Link } from "react-router-dom";
import "../styling/HomeNav.css";



function HomeNav(){
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <p className="nav-links" id="brand">JESSICA CRUMP</p>
            </Link>
            <ul className="nav-links">
                <Link to={"/portfolio"}>
                    <li>PORTFOLIO</li>
                </Link>
                <Link to={"/resume"}>
                    <li>RESUME</li>
                </Link>
                <Link to={"/contact"}>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </div>
    );
}

export default HomeNav;