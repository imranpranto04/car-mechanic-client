import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>

    <Switch>

    <Route  path="/home">
        <Home></Home>
      </Route>

      <Route  path="/login">
        <Login></Login>
      </Route>

      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
    
  </Router>
  </UserContext.Provider>
    
  );
}

export default App;
