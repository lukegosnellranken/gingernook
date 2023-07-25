import React from "react";
import gingernooklogo from '../../images/gingernooklogonew-nobackground11.png';
import './Nav.css';
import './NavItem'
import NavItem from "./NavItem";
 
function Nav() {
    return(
        <div className="navDiv">
            <nav className="nav">
                <ul className="nav-list">
                    <NavItem name="Life"/>
                    <NavItem name="Recipes"/>
                    <NavItem name="Our Family"/>
                    <NavItem name="Resources"/>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;