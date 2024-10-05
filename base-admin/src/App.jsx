import React from 'react';
// import './App.css'
import LayoutAdmin from './components/Layout/Admin/Layout.admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from './pages/page.home/page.home';
import PageAdmin from './pages/page.admin/page.admin';
import Page404 from './pages/page.404/page.404';


function App() {
  return (
    <BrowserRouter>
      <LayoutAdmin>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/admin" element={<PageAdmin />} />
          <Route path="/faktur" element={<PageAdmin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LayoutAdmin>
    </BrowserRouter>
  );
}

export default App
