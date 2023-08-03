import React from "react";
import { useState, useEffect } from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";

// let titleArray = [];



// async function loadArticles() {
//     await fetch('http://localhost:1337/api/articles')
//     .then(res => {return res.json()})
//     .then(data => {
//         for (let i = 0; i < data.data.length; i++) {
//             titleArray.push(data.data[i].attributes.Title);
//             console.log("first object: " + titleArray[0]);
//         }
//         console.log(titleArray);
//     })
//     .catch(error => {console.log(error)});
// }

function Card(props) {
    // loadArticles();
    // console.log(titleArray[titleArray.length-1]);
    // console.log(props.titleArray[props.titleArray.length-1]);
    // titleArray = [];
    let titleArray = [];
    // let [titleArrayState, setTitleArrayState] = useState();

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
                    titleArray.push(data.data[i].attributes.Title);
                }
                // setTitleArrayState(titleArray);
                console.log("first object: " + titleArray[0]);
                console.log("second object: " + titleArray[1]);
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
                {console.log(titleArray[0])}
                <ArticleCard
                    title={titleArray[titleArray.length-1]}
                    // title={props.titleArray[props.titleArray.length-1]}
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