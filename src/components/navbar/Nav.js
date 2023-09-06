import React from "react";
import './Nav.css';
import './NavItem'
import NavItem from "./NavItem";
 
function Nav() {
    return(
        <div className="navDiv">
            <nav className="nav">
                <div id="div-nav-list">
                    <ul className="nav-list">
                        <NavItem name="Life"/>
                        <NavItem name="Recipes"/>
                        <NavItem name="Our Family" href="our-family"/>
                        <NavItem name="Resources"/>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;