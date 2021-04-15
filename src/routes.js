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
      <Route exact path="/" component={() => <Redirect to={{ pathname: "/login"}} />} />
      <Route exact path="/login" component={() => <Login/>} />
      <PrivateRoute path="/app" component={() => <h1>Autenticado!</h1>} />
    </Switch>
);

export default Routes;