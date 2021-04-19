import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { isAuthenticated } from './config/auth';

import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="comics" element={<Comics />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="favorites" element={<h1>Favoritos</h1>} />
      <Route path="*" element={<h1>Not found route</h1>} />
    </Routes>
  );
}

export default Router;