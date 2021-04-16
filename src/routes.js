import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isAutenticated } from './config/auth';
import Login from './pages/Login';

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
    <Route path="/register" component={() => <h1>Cadastro</h1>} />
    <PrivateRoute exact path="/" component={() => <h1>Home</h1>} />
    <PrivateRoute path="/profile" component={() => <h1>Perfil</h1>} />
    <PrivateRoute path="/characters" component={() => <h1>Personagens</h1>} />
    <PrivateRoute path="/comics" component={() => <h1>Comics</h1>} />
    <PrivateRoute path="/favorites" component={() => <h1>Favoritos</h1>} />
  </Switch>
);

export default Routes;