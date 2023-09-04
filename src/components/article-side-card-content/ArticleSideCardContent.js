import React from "react";
import './ArticleSideCardContent.css';
import { Link } from "react-router-dom";

function ArticleSideCardContent(props) {
    return (
        <Link to={props.sub} className="article-link">
            <div id="div-article-side-card-content">
                <div id="div-article-side-card-content-image">
                    <img src={"http://localhost:1337" + props.image} alt="" id="article-side-card-content-image" />
                </div>
                <div id="div-article-side-card-content-title">
                    <p id="p-article-side-card-content-title">{props.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default ArticleSideCardContent;