import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Base from './components/Base';
import Usuario from './components/Usuario';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <Router>
      <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
          
          
        </ul>
      <Switch>
        <Route exact path="/">
            <Base/>
        </Route>
        
        <Route path="/users/:id">
            <Usuario/>
        </Route>
        <Route path="/users">
            <Usuarios/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
