import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoutes';

export default function Routers() {
  toast.success('Oie sucesso!');
  return (
    <BrowserRouter>
      <Routes>
        <MyRoute exact path="/" element={<Login />} isClosed />
        <MyRoute path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
