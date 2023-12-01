/* eslint-disable no-unused-vars */
import React from "react";
import { useState,useEffect } from "react";
import { useAuth } from "../../auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";

function Konten() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();
    const navigate = useNavigate(); // Ganti useHistory dengan useNavigate
  
    useEffect(() => {
      if (!currentUser) {
        // Redirect or handle the case when the user is not logged in
        navigate('/login');
      }
    }, [currentUser, navigate]);
  
    const handleLogout = async () => {
      try {
        console.log('Logging out...');
        await auth.signOut();
        console.log('Logout successful');
        navigate('/login');
      } catch (error) {
        console.error('Error during sign-out:', error.message);
      }
    };
    if (!currentUser) {
      // You can also handle the case before useEffect runs
      return null;
    }
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
                <p className="teks pt-2">Personal Information</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi2.png"></img>
                <p className="teks pt-2">Privacy & Security</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi3.png"></img>
                <p className="teks pt-2">Data Recapitulation</p>
            </div>        
            </div>
        <div className="help">
            <h3 className="judul">Help Center</h3>
            <div className="fill">
                <img className="foto" src="./images/isi4.png"></img>
                <p className="teks pt-3">Settings</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi5.png"></img>
                <p className="teks pt-3">Help</p>
            </div>
            <div className="fill">
                <img className="foto" src="./images/isi6.png"></img>
                <p className="teks pt-3">Report Problem / Bug</p>
            </div>
            <div className="fill">
                <img className="foto1" src="./images/isi7.png"></img>
                <p className="teks pt-3">About Us</p>
            </div>
            <div className="fill">
            <img className="foto1" src="./images/isi7.png"></img>
                <button className="pt-3 pl-3" onClick={handleLogout}><span className="text-red-500">Sign out</span></button>
            </div>
        </div>
        </div>
        </div>
    </div>
}

export default Konten;