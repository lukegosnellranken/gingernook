import React from "react";
import './ArticleSideCardContent.css';
import { Link } from "react-router-dom";

function ArticleSideCardContent(props) {
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

export default ArticleSideCardContent;