import React from "react";
import './FullArticle.css';
import { useParams } from "react-router-dom";

function FullArticle() {
    const { id } = useParams();
    console.log(id);
    return (
        <div id="full-article-card">
            <p>Title</p>
            <p>Content</p>
        </div>
    )
}

export default FullArticle;