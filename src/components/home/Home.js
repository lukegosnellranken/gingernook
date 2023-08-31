import React from "react";
import './Home.css';
import ContentArea from "../content-area/ContentArea";
import Card from "../card/Card";
import SideCard from "../side-card/SideCard";
import { useEffect } from "react";
import sid from '../../images/sid7.png';
import beans from '../../images/coffee-beans5.png';

function Home() {
    return (
        <div id="home-container">
            <div id="card-div">
                <Card
                    title = "Writings from the Cribside"
                />
            </div>
            <div id="side-card-div">
                <SideCard
                    title1 = "Welcome to Ginger Nook!"
                    image1 = {sid}
                    description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit vestibulum aliquam. Integer sed luctus mauris, in eleifend est. Praesent aliquet orci nec nisi iaculis pharetra. Donec aliquam neque sit amet laoreet auctor. Maecenas sem odio, varius quis metus ut, placerat viverra nulla. Donec mattis velit mauris, ut pellentesque dolor aliquam eu. Quisque vehicula magna massa, sed facilisis justo maximus et. Pellentesque a finibus nibh. Nullam in elementum risus. Suspendisse lacinia fringilla metus nec vehicula. Fusce maximus velit id tempor pharetra."
                    title2 = "Buy Us a Coffee"
                    image2 = {beans}
                    description2 = "Ginger Nook is ran completely independently, so in order for us to continue covering site costs, please consider buying us a coffee. All donations are greatly appreciated!"
                />
            </div>
        </div>
    )
}

export default Home;