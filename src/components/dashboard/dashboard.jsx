/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";
import { useEffect } from "react";
import Search from "./Search";
import Tabs from "./Tabs";
import Adv from "./Adv";
import Konten from "./Konten";
import './style.css';

const Dashboard = () => {
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
  

  return (
    <div>
        <Search />
        <Adv />
        <Konten />
        <Tabs />
    </div>
  );
};

export default Dashboard;
