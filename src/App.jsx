import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import { AuthRoute, PrivateRoute } from './routes/index';
import {
  Login, TextFieldDemo, ChildrenDemo, InputDemo, NoMatch,
} from './pages/index';
import Trainee from './pages/Trainee/Trainee';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Trainee" />
        </Route>
        <AuthRoute path="/login" component={Login} />
        <PrivateRoute path="/TextFieldDemo" component={TextFieldDemo} />
        <PrivateRoute path="/Trainee" component={Trainee} />
        <PrivateRoute path="/ChildrenDemo" component={ChildrenDemo} />
        <PrivateRoute path="/InputDemo" component={InputDemo} />
        <PrivateRoute component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
