import React from "react";
import './background.css';
import logo from '../../images/gingernooklogo-plain.png';

function Background() {
    return (
        <div>
            <div id="backgroundFrame">
                {<img src={logo} alt="logo" id="logo" />}
            </div>
        </div>
    )
}

export default Background;