import React from "react";
import './ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className="article-card">
            <p>{props.title}</p>
        </div>
    );
}

export default ArticleCard;