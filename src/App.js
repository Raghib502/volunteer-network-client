import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerTypes from './components/VolunteerTypes/VolunteerTypes';
import Registration from './components/Registration/Registration';
import EnrolledEvent from './components/EnrolledEvent/EnrolledEvent';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/registration/:name">
              <Registration></Registration>
            </PrivateRoute>
            <PrivateRoute path="/enrollEvent">
              <EnrolledEvent></EnrolledEvent>
            </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
