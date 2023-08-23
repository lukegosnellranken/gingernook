import React from "react";
import './ArticleCard.css';
import { Link } from "react-router-dom";

function ArticleCard(props) {
    return (
        <Link to={props.sub}>
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
        </Link>
    );
}

export default ArticleCard;