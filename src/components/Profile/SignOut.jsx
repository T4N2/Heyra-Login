/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const auth = getAuth();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await signOut(auth);
        localStorage.removeItem('email');
        console.log('Sign-out successful');
        navigate('/');
      } else {
        console.log('No user is signed in.');
        navigate('/');
      }
    } catch (error) {
      console.error('Error during sign-out:', error.message);
    }
  };
  

  return (
    <div>
      <button onClick={signOutHandler}>Sign Out</button>
    </div>
  );
}

export default SignOut;
