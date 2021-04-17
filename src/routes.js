import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isAutenticated } from './config/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const PrivateRoute = ({ component: Component }, ...rest) => (
  <Route
    {...rest}
    render={props =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)}
  />
)

const Routes = () => (
  <Switch>
    <Route path="/login" component={() => <Login />} />
    <Route path="/register" component={() => <Register />} />
    <PrivateRoute exact path="/" component={() => <Home />} />
    <PrivateRoute path="/profile" component={() => <h1>Perfil</h1>} />
    <PrivateRoute path="/characters" component={() => <Home initialState={{ page: { id: "characters", text: "Characters", } }} />} />
    <PrivateRoute path="/comics" component={() => <Home initialState={{ page: { id: "comics", text: "Comics", } }} />} />
    <PrivateRoute path="/favorites" component={() => <h1>Favoritos</h1>} />
  </Switch>
);

export default Routes;