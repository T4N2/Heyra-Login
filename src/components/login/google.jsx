/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { provider, auth } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom'; // Import useNavigate

const Google = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate(); // Gunakan useNavigate

  const HandleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('.././'); // Navigasi ke halaman Dashboard setelah login berhasil
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className='mt-4'>
      
        <button onClick={HandleClick} className="bg-white text-orange-500 font-semibold py-2 px-4 border border-orange-500 rounded shadow flex items-center">
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-11h-2v2h-2v2h2v2h2v-2h2v-2h-2z"/>
        </svg>
        Google
      </button>
      
    </div>
  );
}

export default Google;
