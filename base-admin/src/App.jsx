import React from 'react';
import LayoutAdmin from './components/Layout/Admin/Layout.admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/const-routes/const.routes';

function App() {
  return (
    <BrowserRouter>
      <LayoutAdmin>
        <Routes>
         {
           routes.map((route, index) => {
             return <Route key={index} path={route.path} element={<route.component/>} />
           })
         }
        </Routes>
      </LayoutAdmin>
    </BrowserRouter>
  );
}

export default App
