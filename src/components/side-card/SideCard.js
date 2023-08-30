import React from "react";
import './SideCard.css';

function SideCard(props) {
    return (
        <div id="side-card">
            <div id="stitch-div">
                <div id="content-div">
                    <div id="section-1">
                        <p id="section-1-title">{props.title1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCard;