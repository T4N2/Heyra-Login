/* eslint-disable no-unused-vars */
import React from "react";
import { useState,useEffect } from "react";
import { useAuth } from "../../auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";

function Heads() {
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
    return <div className="hed">
        <div className="main">
        <a href=".././" ><img className="back" src="./images/back.png"></img></a>
        <h4 className="title">PROFILE</h4>
        </div>
        <div className="second">
            <img className="edit" src="./images/edits.png"></img>
        </div>
        <button onClick={handleLogout}>Sign out</button>
    </div>

}

export default Heads;