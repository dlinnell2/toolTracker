import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToolList from './pages/ToolList';
import Admin from './pages/Admin'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path = "/admin">
          <Admin />
        </Route>
        <Route path = "/">
          <ToolList />
        </Route>
      </Switch>
    </div>
  </Router>
)
export default App;
