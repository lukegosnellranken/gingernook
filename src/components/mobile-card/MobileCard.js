import React from "react";
import './MobileCard.css';

function MobileCard(props) {
    return (
        <div id="mobile-card">
            <div id="stitch-div">
                <div id="mobile-content-div">
                    <div id="div-mobile-card-image">
                        <img id="mobile-card-image" src={props.image1} alt="" />
                    </div>
                    <div id="div-mobile-card-title-content">
                        <p id="mobile-card-title">{props.title1}</p>
                        <p id="mobile-card-content">{props.description1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileCard;