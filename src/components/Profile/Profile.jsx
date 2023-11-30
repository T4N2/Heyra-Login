/* eslint-disable no-unused-vars */
import React from "react";
import Heads from "./Heads";
import Konten from "./Konten";
import './style.css';
function Profile() {
    return (
    <div>
        <Heads />
    <div className="profile-wrap">
        <img className="profile" src="./images/puro.png"></img>
        <h3 className="name">KEPO</h3>
    </div>
    <Konten />
    </div>
    );
}

export default Profile;