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
import Delete from './components/Delete/Delete/Delete';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

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

      <PrivateRoute  path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>

      {/* <Route path="/dashboard/booking">
        <BookingService></BookingService>
      </Route> */}

      <PrivateRoute  path="/order">
        <Order/>
      </PrivateRoute>

      <PrivateRoute  path="/addService">
        <AddService></AddService>
      </PrivateRoute>

      <Route path="/addReview">
        <AddReview></AddReview>
      </Route>

      <PrivateRoute  path="/delete">
        <Delete></Delete>
      </PrivateRoute>

      <PrivateRoute  path="/checkout/:_id">
        <Checkout/>
      </PrivateRoute>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route  path="*">
        <h2 className="text-danger text-center">404 Not Found!</h2>
      </Route>
    </Switch>
    
  </Router>
  </UserContext.Provider>
    
  );
}

export default App;
