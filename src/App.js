import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (

    <Router>

    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
    
  </Router>
    
  );
}

export default App;
