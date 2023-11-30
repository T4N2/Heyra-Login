/* eslint-disable no-unused-vars */
import React from "react";
import { FaSistrix } from "react-icons/fa";

function Search() {
    return <div className="main-wrap">
    <div className="search-main">
    <FaSistrix className="search-icon" />
    <input type="text" placeholder="Cari Layanan, Fitur" className="w-full px-3 py-2 border border-gray-100 rounded-md" />
    </div>
        <div className="second-wrap">
            <img className="onepic" src="./images/prof.png"></img>
            <img className="twopic" src="./images/new.png"></img>
        </div>
    </div>
}

export default Search;