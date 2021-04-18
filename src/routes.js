import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <PrivateRoute path="profile" element={<h1>Perfil</h1>} />
      <Route path="/" element={<Home />}>
        <PrivateRoute path="characters" element={<Home initialState={{ page: { id: "characters", text: "Characters", } }} />} />
        <PrivateRoute path="comics" element={<Home initialState={{ page: { id: "comics", text: "Comics", } }} />} />
      </Route>
      <PrivateRoute path="favorites" element={<h1>Favoritos</h1>} />
      <Route path="*" element={<h1>Not found route</h1>} />
    </Routes>
  );
}

export default Router;