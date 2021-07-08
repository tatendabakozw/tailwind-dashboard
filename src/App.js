import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Page1 from './pages/Page1';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
