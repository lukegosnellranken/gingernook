import React from "react";
import './HomeCardContent.css';
import { Link } from "react-router-dom";

function ArticleCard(props) {
    return (
        <Link to={props.sub} className="article-link">
            <div id="div-home-article-card">
                <div id="div-home-article-image">
                    <img src={props.image} alt="" id="home-article-image" />
                </div>
                <div id="div-home-article-title-date-description">
                    <div id="div-home-article-title">
                        <p id="p-home-article-title">{props.title}</p>
                    </div>
                    <div id="div-home-article-date">
                        <p id="p-home-article-date">{props.date}</p>
                    </div>
                    <div id="div-home-article-description">
                        <p id="p-home-article-description">{props.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;