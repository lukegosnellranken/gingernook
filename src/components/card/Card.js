import React from "react";
import { useState, useEffect } from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";

function Card(props) {
    let [titleArray, setTitleArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:1337/api/articles')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log('Articles res error');
                }
            })
            .then(data => {
                for (let i = 0; i < data.data.length; i++) {
                    setTitleArray(arr => [...arr, data.data[i].attributes.Title]);
                }
                // console.log("first object: " + titleArray[0]);
                // console.log("second object: " + titleArray[1]);
            })
            .catch(error => {console.log(error)});
        }
        fetchData();
    }, []);

    console.log(titleArray);

    return (
        <div id="card">
            <h1 id="title">{props.title}</h1>
            <div id="article-card-div">
                <ArticleCard
                    title={titleArray[titleArray.length-1]}
                />
                <ArticleCard
                    title={titleArray[titleArray.length-2]}
                />
                <ArticleCard
                    title={titleArray[titleArray.length-3]}
                />
            </div>
        </div>
    );
}

export default Card;