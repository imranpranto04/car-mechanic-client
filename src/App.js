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
import Checkout from './components/Checkout/Checkout';
import Order from './components/Dashboard/Order/Order';
import Navbars from './components/Home/Navbars/Navbars';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Navbars/>
    <h4 className="text-center">User: {loggedInUser.name}</h4>

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

      <Route path="/order">
        <Order/>
      </Route>

      <Route path="/addService">
        <AddService></AddService>
      </Route>

      <Route path="/addReview">
        <AddReview></AddReview>
      </Route>

      <Route path="/checkout/:_id">
        <Checkout/>
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
