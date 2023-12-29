import React from 'react';
import './mainpage.css'
import logo from '../assets/media/FoodShare_1.png'
import search from '../assets/media/search.svg'


function MainPage() {
    return (
        <div className={"main-page"}>
            <div className={"title-box"}>
                <img src={logo} alt={"icon"} height={100} width={100}/>
                <span className={"title-text"}>FoodShare</span>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search"></input>
                        <button type="submit" className="searchButton">
                            <img src={search} alt={"search-icon"}/>
                        </button>
                </div>
            </div>

        </div>
    );
}

export default MainPage;

