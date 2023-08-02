import React from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";

function Card(props) {
    const titleArray = [];
    fetch('http://localhost:1337/api/articles')
    .then(res => {return res.json()})
    // .then(data => {console.log(data.data[0].attributes.Title)})
    // .then(data => {titleArray.push(data.data[0].attributes.Title)})
    .then(data => {
        for (let i = 0; i < data.data.length; i++) {
            titleArray.push(data.data[i].attributes.Title);
        }
        // data.data.forEach(titleArray.push(attributes.Title));
        // data.data.forEach(element => {
        //     titleArray.push(data.data[0].attributes.Title);
        //     console.log("element: " + element);
        // });
        console.log(titleArray);
    })
    .catch(error => {console.log(error)});
    return (
        <div id="card">
            <h1 id="title">{props.title}</h1>
            <div id="article-card-div">
                <ArticleCard
                    title="hello"
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