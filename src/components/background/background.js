import React from "react";
import './background.css';
import logo from '../../images/gingernooklogo-plain.png';

function Background() {
    return (
        <div>
            <div id="backgroundFrame">
                <a href="http://localhost:3000/">
                    {<img src={logo} alt="logo" id="logo" href="http://localhost:3000"/>}
                </a>
            </div>
        </div>
    )
}

export default Background;