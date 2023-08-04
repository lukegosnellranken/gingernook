import React from "react";
import './ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className="article-card">
            <p className="title">{props.title}</p>
            <p className="date">{props.date}</p>
        </div>
    );
}

export default ArticleCard;