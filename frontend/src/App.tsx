import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './views/admin/Admin'
import Login from './views/login/Login'
import Main from './views/main/Main'
import User from './views/user/User'


function App() {
return (
  <div>
  <Switch>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/">
      <Main />
    </Route>
    <Route path="/user">
      <User />
    </Route>
  </Switch>
</div>
  );
}
export default App;
