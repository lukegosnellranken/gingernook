import React from "react";
import './FullArticleSideCard.css';
import FullArticleCard from "../full-article-side-card-content/FullArticleCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FullArticleSideCard(props) {
    let [initDataArray, setInitDataArray] = useState([]);
    console.log(initDataArray);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:1337/api/articles?populate=*')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log('Articles res error');
                }
            })
            .then(data => {
                let iArray = [];
                for (let i = 0; i < data.data.length; i++) {
                    let title = data.data[i].attributes.Title;
                    let dateString = data.data[i].attributes.Date.replaceAll("-","/");
                    dateString = dateString.slice(5) + "/" + dateString.slice(0,4);
                    let image = data.data[i].attributes.Media.data.attributes.formats.thumbnail.url;
                    let description = data.data[i].attributes.Description;
                    iArray.push([title, dateString, image, description]);
                }
                setInitDataArray(iArray.reverse());
            })
            .catch(error => {console.log(error)});
        }
        fetchData();
    }, []);

    function items() {
        // Remove current article from array
        for (let i = 0; i < initDataArray.length; i++) { 
            if (initDataArray[i][0].replace(/\s+/g, '-').toLowerCase() === id) {
                initDataArray.splice(i, 1);
            }
        }
        return (
            <div id="div-side-articles">      
                {initDataArray.reverse().map((article, i) => (
                    <div key={i}>
                        <FullArticleCard
                            sub = {`/articles/${(initDataArray[initDataArray.length-(i+1)][0]).replace(/\s+/g, '-').toLowerCase()}`}
                            title = {initDataArray[initDataArray.length-(i+1)][0]}
                            image = {initDataArray[initDataArray.length-(i+1)][2]}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div id="div-full-article-side-card">
            <div id="stitch-div">
                <div id="content-div">
                    {items()}
                </div>
            </div>
        </div>
    )
}

export default FullArticleSideCard;