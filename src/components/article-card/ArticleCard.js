import React from "react";
import './ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className="article-card">
            <div className="div-image">
                <img src={"http://localhost:1337" + props.image} alt="" className="image" />
            </div>
            <div className="div-title-date">
                <div className="div-title">
                    <p className="title">{props.title}</p>
                </div>
                <div className="div-date">
                    <p className="date">{props.date}</p>
                </div>
                <div className="div-description">
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;