import React from "react";
import './background.css';
import logo from '../../images/gingernooklogo-plain.png';
import bmc from '../../images/bmc-logo.png'; 

function Background() {
    return (
        <div>
            <div id="backgroundFrame">
                <a href="http://localhost:3000/">
                    {<img src={logo} alt="logo" id="logo" href="http://localhost:3000"/>}
                </a>
                <div id="div-bmc">
                    <img id="image-bmc" src={bmc} href="#" alt="" /> 
                </div>
                <div id="social-links">
                    <a id="social-links-facebook" href="#" class="fa fa-facebook social-link"></a>
                    <a id="social-links-pinterest" href="#" class="fa fa-pinterest social-link"></a>
                    <a id="social-links-instagram" href="#" class="fa fa-instagram social-link"></a>
                    <a id="social-links-rss" href="#" class="fa fa-rss social-link"></a>
                </div>
            </div>
        </div>
    )
}

export default Background;