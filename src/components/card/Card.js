import React from "react";
import { useState, useEffect } from "react";
import './Card.css';
import ArticleCard from "../article-card/ArticleCard";
import ReactPaginate from 'react-paginate';
import { render } from "@testing-library/react";

function Card(props) {
    let [initDataArray, setInitDataArray] = useState([]);
    console.log(initDataArray);

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
    
    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        let [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
        
        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            setPageCount(Math.ceil(initDataArray.length / itemsPerPage));
            setCurrentItems(initDataArray.slice(itemOffset, endOffset));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % initDataArray.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <div id="div-items-pagination">
                <div id="div-items">
                    <Items currentItems={currentItems} />
                    <div id="div-pagination">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
            
        );
    }

    function Items({ currentItems }) {
        console.log("rerendered Items return!");
        return (
            <div id="article-card-div">      
                {currentItems.reverse().map((article, i) => (
                    <div key={i}>
                        <ArticleCard
                            title = {currentItems[currentItems.length-(i+1)][0]}
                            date = {currentItems[currentItems.length-(i+1)][1]}
                            image = {currentItems[currentItems.length-(i+1)][2]}
                            description = {currentItems[currentItems.length-(i+1)][3]}
                        />
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div id="container">
            <div id="card">
                <div id="stitch-div">
                    <h1 id="title">{props.title}</h1>
                    <PaginatedItems itemsPerPage={2} />
                    {console.log("rerendered Card return!")}
                </div>
            </div>
        </div>
    );
}

export default Card;