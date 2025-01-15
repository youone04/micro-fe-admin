import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Pastikan menggunakan createRoot dari react-dom/client

// Fungsi untuk merender micro frontend
window.renderAdmin = (containerId, navigate) => {
  const container = document.getElementById(containerId);
  
  if (container) {
    const root = createRoot(container); // Buat root untuk container
    root.render(<App navigate={navigate}/>); // Render komponen App dengan navigate (jika diperlukan)
    
    // Simpan root ke window untuk digunakan nanti saat unmount
    window[`root_${containerId}`] = root;
  }
};

// Fungsi untuk meng-unmount micro frontend
window.unmountAdmin = (containerId) => {
  const root = window[`root_${containerId}`]; // Ambil root yang disimpan

  if (root) {
    const container = document.getElementById(containerId);
    if (container) {
      root.unmount(); // Unmount komponen menggunakan root.unmount()
      delete window[`root_${containerId}`]; // Hapus root setelah unmount
    }
  }
};

// Render aplikasi utama jika tidak ada micro frontend yang sedang dirender
if (!document.getElementById('Admin-container')) {
  const root = createRoot(document.getElementById('root')); // Buat root untuk aplikasi utama
  root.render(<App />); // Render aplikasi utama tanpa parameter tambahan
}

// Inisialisasi reportWebVitals (opsional)
reportWebVitals();
