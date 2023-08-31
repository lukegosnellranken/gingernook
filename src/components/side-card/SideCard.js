import React from "react";
import './SideCard.css';

function SideCard(props) {
    return (
        <div id="side-card">
            <div id="stitch-div">
                <div id="content-div">
                    <div id="section-1" className="sections">
                        <p id="section-1-title" className="section-title">{props.title1}</p>
                        <img id="section-1-image" src={props.image1} alt="" />
                        <p id="section-1-content" className="section-content">{props.description1}</p>
                    </div>
                    <div className="separator"></div>
                    <div id="section-2" className="sections">
                        <p id="section-2-title" className="section-title">{props.title2}</p>
                        <p id="section-2-content"  className="section-content">{props.description2}</p>
                        <img id="section-2-image" src={props.image2} alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCard;