/* eslint-disable react/no-deprecated */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Sesuaikan dengan path yang benar

const rootElement = document.getElementById('root');

// Pastikan bahwa aplikasi Anda menggunakan React versi 18 atau lebih tinggi
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
