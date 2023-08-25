import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './FullArticle.css';

function FullArticle() {
    let [initDataArray, setInitDataArray] = useState([]);
    // Set filler items in array so that the return does not cause an error on the initial render
    let [articleDataArray, setArticleDataArray] = useState([["Loading...", "Loading...", "Loading..."]]);
    console.log(articleDataArray);
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
                    iArray.push([title, dateString, image]);
                }
                setInitDataArray(iArray.reverse());
            })
            .catch(error => {console.log(error)});
        }
        fetchData();
    }, []);

    console.log("test " + id);
    useEffect(() => {
        let iArray = [];
        for (let i = 0; i < initDataArray.length; i++) {
            if (initDataArray[i][0].replace(/\s+/g, '-').toLowerCase() === id) {
                console.log('yes!');
                let title = initDataArray[i][0];
                let dateString = initDataArray[i][1];
                let image = initDataArray[i][2];
                iArray.push([title, dateString, image]);
            }
        }
        // Only set articleDataArray if iArray is populated so that it is not set to an empty array, causing an unnecessary
        // re-render and an error in the return, which would call a non-existent object in articleDataArray
        if (iArray.length > 0) {
            setArticleDataArray(iArray);
        }
    }, [initDataArray, id]);

    return (
        <div id="full-article-card">
            <p>{articleDataArray[0][0]}</p>
            <p>Content</p>
        </div>
    )
}

export default FullArticle;