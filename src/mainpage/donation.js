import React from "react";
import './onlineshop.css';
import AppNavBar from './navbar';
import titleimage from '../assets/media/img.png'

function Donation() {
    return (
        <div className={"main-page"}>
            <AppNavBar></AppNavBar>
            <div>
                <img src={titleimage} alt={"icon"} className={"intro-image"}/>
            </div>
        </div>
        )
}
export default Donation;
