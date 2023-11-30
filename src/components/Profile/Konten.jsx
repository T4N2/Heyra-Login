/* eslint-disable no-unused-vars */
import React from "react";

function Konten() {
    return <div className="one-wrap">
        <div className="two-wrap">
        <div className="overlap">
            <div className="kontribusi">
            <p>Kontributor Lv. 10</p>
            </div>
            <div className="bar-wrap">
                <div className="bar"><div className="distance"></div></div>
                <div className="nomor">
                    <p className="isi1">Top</p>
                    <p className="isi2">200/500</p>
                </div>
            </div>
            <div className="level">
            <p>*Tingkatkan level Kontributor anda untuk mendapatkan hadiah menarik</p>
            </div>
        </div>
        <div className="third-wrap">
        <div className="help">
            <h3 className="judul">Account</h3>
            <div className="fill">
                <img className="foto" src="./images/isi1.png"></img>
                <p className="teks">Personal Information</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi2.png"></img>
                <p className="teks">Privacy & Security</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi3.png"></img>
                <p className="teks">Data Recapitulation</p>
            </div>        
            </div>
        <div className="help">
            <h3 className="judul">Help Center</h3>
            <div className="fill">
                <img className="foto" src="./images/isi4.png"></img>
                <p className="teks">Settings</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi5.png"></img>
                <p className="teks">Help</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi6.png"></img>
                <p className="teks">Report Problem / Bug</p>
            </div>
            <div className="fill">
                <img className="foto1" src="./images/isi7.png"></img>
                <p className="teks">About Us</p>
            </div>
            <div className="out"></div>
        </div>
        </div>
        </div>
    </div>
}

export default Konten;