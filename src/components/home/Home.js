import React from "react";
import './Home.css';
import ContentArea from "../content-area/ContentArea";
import Card from "../card/Card";
import { useEffect } from "react";

// const titleArray = [];

// function loadArticles() {
//     fetch('http://localhost:1337/api/articles')
//     .then(res => {
//         if (res.ok) {
//             return res.json()
//         } else {
//             console.log('Articles res error');
//         }
//     })
//     .then(data => {
//         for (let i = 0; i < data.data.length; i++) {
//             titleArray.push(data.data[i].attributes.Title);
//             console.log("first object: " + titleArray[0]);
//         }
//         console.log(titleArray);
//     })
//     .catch(error => {console.log(error)});
// }

function Home() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch('http://localhost:1337/api/articles')
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             } else {
    //                 console.log('Articles res error');
    //             }
    //         })
    //         .then(data => {
    //             for (let i = 0; i < data.data.length; i++) {
    //                 titleArray.push(data.data[i].attributes.Title);
    //                 console.log("first object: " + titleArray[0]);
    //             }
    //             console.log(titleArray);
    //         })
    //         .catch(error => {console.log(error)});
    //     }
    //     fetchData();
    // }, []);
    
    return (
        <div>
            <div id="card-div">
                <Card
                    title = "Latest Articles"
                    // titleArray = {titleArray}
                />
                {/* <Card
                    title = "Store"
                /> */}
            </div>
        </div>
    )
}

export default Home;