import React from "react";
import './Home.css';
import ContentArea from "../content-area/ContentArea";
import Card from "../card/Card";
import SideCard from "../side-card/SideCard";
import { useEffect } from "react";

function Home() {
    return (
        <div id="home-container">
            <div id="card-div">
                <Card
                    title = "Writings from the Ginger Nook"
                />
            </div>
            <div id="side-card-div">
                <SideCard
                    title1 = "Our Family"
                    image1 = ""
                    description1 = ""
                />
            </div>
        </div>
    )
}

export default Home;