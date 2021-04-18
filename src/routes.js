import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import Comics from './pages/Comics';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const PrivateRoute = ({ element: Component }, ...rest) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (<Login />)}
  />
)

function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<h1>Perfil</h1>} />
      <Route path="/" element={<Home />}>
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
      </Route>
      <Route path="favorites" element={<h1>Favoritos</h1>} />
      <Route path="*" element={<h1>Not found route</h1>} />
    </Routes>
  );
}

export default Router;