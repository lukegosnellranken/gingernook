import React from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";

function Card(props) {
    const titleArray = [];
    fetch('http://localhost:1337/api/articles')
    .then(res => {return res.json()})
    .then(data => {
        for (let i = 0; i < data.data.length; i++) {
            titleArray.push(data.data[i].attributes.Title);
            console.log("first object: " + titleArray[0]);
        }
        console.log(titleArray);
    })
    .catch(error => {console.log(error)});
    return (
        <div id="card">
            <h1 id="title">{props.title}</h1>
            <div id="article-card-div">
                <ArticleCard
                    title={titleArray[titleArray.length-1]}
                />
                <ArticleCard
                    title="hello"
                />
                <ArticleCard
                    title="hello"
                />
            </div>
        </div>
    );
}

export default Card;