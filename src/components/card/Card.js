import React from "react";
import './Card.css';

function Card(props) {
    return (
        <div id="card">
            <h1 id="title">{props.title}</h1>
        </div>
    );
}

export default Card;