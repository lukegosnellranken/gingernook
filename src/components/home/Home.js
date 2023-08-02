import React from "react";
import './Home.css';
import ContentArea from "../content-area/ContentArea";
import Card from "../card/Card";

function Home() {
    return (
        <div>
            <div id="card-div">
                <Card
                    title = "Latest Articles"
                />
                <Card
                    title = "Store"
                />
            </div>
        </div>
    )
}

export default Home;