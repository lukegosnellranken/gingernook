import React from "react";
import './FullArticleCard.css';
import { Link } from "react-router-dom";

function FullArticleCard(props) {
    return (
        <Link to={props.sub} className="article-link">
            <div className="article-card">
                <div className="div-image">
                    <img src={"http://localhost:1337" + props.image} alt="" className="image" />
                </div>
                <div className="div-title">
                    <p className="title">{props.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default FullArticleCard;