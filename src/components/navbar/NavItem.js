import React from "react";
import './NavItem.css';

function NavItem(props) {
    return (
        <li className="nav-list-item"><a href={"http://localhost:3000/" + props.href}>{props.name}</a></li>
    )
}

export default NavItem;