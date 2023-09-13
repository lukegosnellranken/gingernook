import React from "react";
import { Link } from "react-router-dom";
import './ArticleSideCardContent.css';

function ArticleSideCardContent(props) {
    return (
        <Link to={props.sub} className="article-link">
            <div id="div-article-side-card-content">
                <div id="div-article-side-card-content-image">
                    <img src={props.image} alt="" id="image-article-side-card-content" />
                </div>
                <div id="div-article-side-card-content-title">
                    <p id="p-article-side-card-content-title">{props.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default ArticleSideCardContent;