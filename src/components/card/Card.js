import React from "react";
import { useState, useEffect } from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";

let arraySetFlag = false;

function Card(props) {
    let [titleArray, setTitleArray] = useState([
        // ["loading...", "loading...", "loading...", "loading..."],
        // ["loading...", "loading...", "loading...", "loading..."],
        // ["loading...", "loading...", "loading...", "loading..."]
        []
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:1337/api/articles?populate=*')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log('Articles res error');
                }
            })
            .then(data => {
                setTitleArray(arr => []);
                for (let i = 0; i < data.data.length; i++) {
                    let title = data.data[i].attributes.Title;
                    let dateString = data.data[i].attributes.Date.replaceAll("-","/");
                    dateString = dateString.slice(5) + "/" + dateString.slice(0,4);
                    let image = data.data[i].attributes.Media.data.attributes.formats.thumbnail.url;
                    let description = data.data[i].attributes.Description;
                    setTitleArray(arr => 
                        [...arr, [title, dateString, image, description]]
                    );
                }
                arraySetFlag = true;
                // console.log("first object: " + titleArray[0]);
                // console.log("second object: " + titleArray[1]);
            })
            .catch(error => {console.log(error)});
        }
        fetchData();
    }, []);

    // console.log(titleArray);

    return (
        <div id="card">
            <div id="stitch-div">
                <h1 id="title">{props.title}</h1>
                <div id="article-card-div">
                    {titleArray.map((article, i) => (
                        <div key={i}> 
                            {console.log(article)}
                            <ArticleCard
                                title = {titleArray[titleArray.length-(i+1)][0]}
                                date = {titleArray[titleArray.length-(i+1)][1]}
                                image = {titleArray[titleArray.length-(i+1)][2]}
                                description = {titleArray[titleArray.length-(i+1)][3]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;