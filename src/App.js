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
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingService from './components/Dashboard/BookingService/BookingService';
import AddService from './components/AddService/AddService';
import AddReview from './components/AddReview/AddReview';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h4>User Name: </h4>

    <Router>

    <Switch>

    <Route  path="/home">
        <Home></Home>
      </Route>

      <Route  path="/login">
        <Login></Login>
      </Route>

      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>

      <Route path="/dashboard/booking">
        <BookingService></BookingService>
      </Route>

      <Route path="/addService">
        <AddService></AddService>
      </Route>

      <Route path="/addReview">
        <AddReview></AddReview>
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
