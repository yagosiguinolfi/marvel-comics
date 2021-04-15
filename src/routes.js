import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAutenticated } from './config/auth';
import Login from './pages/Login';

const PrivateRoute = ({ component: Component }, ...rest) => (
  <Route
    {...rest}
    render={props =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={() => <Login/>} />
      <PrivateRoute path="/app" component={() => <h1>Autenticado!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;