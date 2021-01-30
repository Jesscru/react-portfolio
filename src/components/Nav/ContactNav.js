import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";



function ContactNav(){
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
                <Link to={"/resume"}>
                    <li>RESUME</li>
                </Link>
            </ul>
        </div>
    );
}

export default ContactNav;