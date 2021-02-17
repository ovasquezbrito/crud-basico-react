import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Base from './components/Base';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          
        </ul>
      <Switch>
        <Route path="/inicio/:nombre">
            <Inicio/>
        </Route>
        <Route path="/">
            <Base/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
