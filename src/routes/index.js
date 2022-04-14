import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
